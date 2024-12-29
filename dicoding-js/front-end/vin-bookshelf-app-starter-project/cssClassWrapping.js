// Input: a string of Tailwind CSS classes
const tailwindClasses = 'grid grid-cols-2 mt-2 w-full gap-2 sm:grid-rows-3 sm:place-items-end sm:col-start-2 sm:row-start-1 sm:row-span-3';

// Function to wrap each class in single quotes and output a formatted array
const wrapClasses = (classes) => {
  return classes.split(' ').map(className => `'${className}'`).join(',\n  ');
};

// Generate the formatted result
const formattedResult = `[\n  ${wrapClasses(tailwindClasses)}\n]`;

// Output the result
console.log(formattedResult);
