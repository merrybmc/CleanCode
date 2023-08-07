{
  // DOM 추상화

  // case 1
  const createLoader = () => {
    const element1 = document.createElement('div');
    const element2 = document.createElement('div');
    const element3 = document.createElement('div');

    return { element1, element2, element3 };
  };

  const createLoaderStyle = ({ element1, element2, element3 }) => {
    element1.setAttribute('class', 'loading d-flex justify-center mt-3');
    element2.setAttribute('class', 'relative spinner-cotainer');
    element3.setAttribute('class', 'material spinner');

    return {
      newElement1,
      newElement2,
      newElement3,
    };
  };

  const loader = () => {
    const { element1, element2, element3 } = createLoader();
    const { newElement1, newElement2, newElement3 } = createLoaderStyle(element1, element2, element3);

    newElement1.append(newElement2);
    newElement2.append(newElement3);

    return newElement1;
  };

  // case 2

  // 💩 bad case
  const element = document.querySelector('#modal');

  element.style.backgroundColor = 'black';

  element.classList.add('--open');

  element.classList.remove('--open');

  // ✨ good case
  const modal = () => {
    return document.querySelector('#modal');
  };

  const changeColor = () => {
    element.style.backgroundColor = 'black';
  };

  const openModal = () => {
    element.classList.add('--open');
  };

  const closeModal = () => {
    element.classList.remove('--open');
  };

  const myModal = () => {
    return document.querySelector('#modal');
  };

  openModal(myModal);
  changeColor(myModal);
  closeModal(myModal);
}
