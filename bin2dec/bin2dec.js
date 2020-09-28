(function () {
  const $form = document.querySelector('#form');
  const $input = document.querySelector('#input');
  const $button = document.querySelector('#convert_button');
  const $result = document.querySelector('#result')

  if (!$form || !$input || !$button || !$result) return;

  function convert(number) {
    if (isNaN(number)) return 'Entered not a number';

    return number
      .toString()
      .split('')
      .reverse()
      .map(Number)
      .reduce((acc, current, idx) => {
        return acc + current * (2 ** idx);
      });
  }

  function renderResult($to, value) {
    $to.innerText = value;
  }

  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    renderResult($result, convert($input.value));
  });
  $button.addEventListener('click', () => {
    renderResult($result, convert($input.value));
  });
})();
