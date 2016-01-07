var dynamicFieldModule=angular.module("dynamicFieldModule",[]);

dynamicFieldModule.directive("dynamicField",function($compile){
	return {
		restrict:"E",
		scope:{
			fieldType:"@",
			model:"="
		},
		controller:dynamicFieldController
	}
	function dynamicFieldController($scope,$element){
		var template;
		switch($scope.fieldType){
		case 'text':
			template="<input type='text' ng-model=model></input>";
				break;
		case 'checkbox':
			template="<input type='checkbox' ng-model=model></input>";
				break;
		default:
			template="<div>Please pass a field type of text or checkbox</div>"
				break;
		}
		template=angular.element($compile(template)($scope));
		$element.replaceWith(template);
	}
});