const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const getElements = (selection) => {
  const element = document.querySelectorAll(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such elements exist`
  );
};

export { getElement, getElements };
