// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-30
description: >
    Object.defineProperty - 'name' is own accessor property without a
    get function (8.12.9 step 1)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, "foo", {
            set: function () { },
            configurable: false
        });

        try {
            Object.defineProperty(obj, "foo", {
                configurable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
