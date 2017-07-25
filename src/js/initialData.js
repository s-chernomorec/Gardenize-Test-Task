const initialData = {
  questions: [{
    id: 0,
    title: 'Detecting an undefined object property',
    username: 'Matt Sheppard',
    text: 'What\'s the best way of checking if an object property in JavaScript is undefined?',
    answers: [{
      questionID: 0,
      answerID: 0,
      username: 'Erwin',
      text: 'Use: if ("undefined" === typeof variable) { console.log("variable is undefined"); }',
      date: new Date(),
    }, {
      questionID: 0,
      answerID: 1,
      username: 'MarkPflug',
      text: 'I believe there are a number of incorrect answers to this topic. Contrary to common belief, "undefined" is NOT a keyword in JavaScript and can in fact have a value assigned to it.',
      date: new Date(),
    }],
    date: new Date()
  }, {
    id: 1,
    title: 'What is the most efficient way to deep clone an object in JavaScript?',
    username: 'community wiki',
    text: 'What is the most efficient way to clone a JavaScript object? I\'ve seen obj = eval(uneval(o)); being used, but that\'s non-standard and only supported by Firefox. I\'ve done things like obj = JSON.parse(JSON.stringify(o)); but question the efficiency. I\'ve also seen recursive copying functions with various flaws. I\'m surprised no canonical solution exists.',
    answers: [],
    date: new Date()
  }, {
    id: 2,
    title: 'How do JavaScript closures work?',
    username: 'community wiki',
    text: 'How would you explain JavaScript closures to someone with a knowledge of the concepts they consist of (for example functions, variables and the like), but does not understand closures themselves? I have seen the Scheme example given on Wikipedia, but unfortunately it did not help.',
    answers: [{
      questionID: 2,
      answerID: 0,
      username: 'Erwin',
      text: 'Whenever you see the function keyword within another function, the inner function has access to variables in the outer function.',
      date: new Date()
    }],
    date: new Date()
  }, {
    id: 3,
    title: 'How do I return the response from an asynchronous call?',
    username: 'Felix Kling',
    text: 'I have a function foo which makes an Ajax request. How can I return the response from foo? I tried to return the value from the success callback as well as assigning the response to a local variable inside the function and return that one, but none of those ways actually return the response.',
    answers: [{
      questionID: 3,
      answerID: 0,
      username: 'meridius',
      text: 'Promises with async/await (ES2017+, available in older browsers if you use a transpiler or regenerator).\n Callbacks (popular in node).\n Promises with then() (ES2015+, available in older browsers if you use one of the many promise libraries)',
      date: new Date()
    }, {
      questionID: 3,
      answerID: 1,
      username: 'Mohan Dere',
      text: 'Here are some approaches to work with asynchronous requests: Browser Promise object, Q - A promise library for JavaScript, A+ Promises.js, jQuery deferred, XMLHttpRequest API, Using callback concept - As implementation in first answer',
      date: new Date()
    }],
    date: new Date()
  }, {
    id: 4,
    title: 'What is a NullPointerException, and how do I fix it?',
    username: 'Ziggy',
    text: 'What are Null Pointer Exceptions (java.lang.NullPointerException) and what causes them? What methods/tools can be used to determine the cause so that you stop the exception from causing the program to terminate prematurely?',
    answers: [],
    date: new Date()
  }, {
    id: 5,
    title: 'How can I prevent SQL injection in PHP?',
    username: 'Ken',
    text: 'If user input is inserted without modification into an SQL query, then the application becomes vulnerable to SQL injection, like in the following example: $unsafe_variable = $_POST[\'user_input\']; mysql_query("INSERT INTO `table` (`column`) VALUES (\'$unsafe_variable\')"); That\'s because the user can input something like value\'); DROP TABLE table;--, and the query becomes: INSERT INTO `table` (`column`) VALUES(\'value\'); DROP TABLE table;--\') What can be done to prevent this from happening?',
    answers: [],
    date: new Date()
  }, {
    id: 6,
    title: 'Is floating point math broken?',
    username: 'Cato Johnston',
    text: '0.1 + 0.2 == 0.3 -> false',
    answers: [{
      questionID: 6,
      answerID: 0,
      username: 'KernelPanik',
      text: 'In short, the fundamental reason for the errors in floating point operations is a combination of the truncation in hardware, and the truncation of a reciprocal in the case of division. Since the IEEE-754 standard only requires an error of less than one half of one unit in the last place for a single operation, the floating point errors over repeated operations will add up unless corrected.',
      date: new Date()
    }, {
      questionID: 6,
      answerID: 1,
      username: 'Joel Coehoorn',
      text: 'When you convert .1 or 1/10 to base 2 (binary) you get a repeating pattern after the decimal point, just like trying to represent 1/3 in base 10. The value is not exact, and therefore you can\'t do exact math with it using normal floating point methods.',
      date: new Date()
    }, {
      questionID: 6,
      answerID: 2,
      username: 'Devin Jeanpierre',
      text: 'Floating point rounding errors. 0.1 cannot be represented as accurately in base-2 as in base-10 due to the missing prime factor of 5. Just as 1/3 takes an infinite number of digits to represent in decimal, but is "0.1" in base-3, 0.1 takes an infinite number of digits in base-2 where it does not in base-10. And computers don\'t have an infinite amount of memory.',
      date: new Date()
    }],
    date: new Date()
  }]
}

export default initialData;
