let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

/* 
  The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
    so the result of || is the second argument, 100.

  The height ?? 100 checks height for being null/undefined, and it’s not,
    so the result is height “as is”, that is 0.

  In practice, the zero height is often a valid value, that shouldn’t be replaced with the default. So ?? does just the right thing.
*/