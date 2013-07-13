Simple demo of a set of password strength validation rules using [Angular.js](http://angularjs.org).

####How it works:

Each passord strength check rule is 'Rule' object consisting of a description and a function 
to check if the entered password passes the rule. For example:
```javascript
new Rule('Contain a digit', function () {
    return $scope.password1.match(/[0-9]/);
})
```

The set of rules are stored in a javascript array and attached to the rules attribute of the angular $scope.
The rule descriptions are bound into html using the ng-repeat directive on a list element:
```html
<ul>
    <li ng-repeat="rule in rules">
        <i ng-class="rule.class()"></i>
        {{rule.description}}
    </li>
</ul>
```

Each password input field is bound to an angular model attribute in javascript using the ng-model attribute in html:
```html
<input type="password" ng-model="password1"/>
```

Each time the user types a key into the input field the angular digest loop takes care checking if each 
password strength rule has passed by invoking the rule.class() method to see what css class should be attached
to the rule icon. If the rule passes a tick is shown. If it fails a cross is shown.
