const inputText = document.querySelector('.reservation__form-input-text');
const dropdownOptions = document.querySelector('.dropdown-options');
const formInput = document.querySelector('input[name="people"]');
const dropdownItems = document.querySelectorAll('.dropdown-options__item');

if (inputText && dropdownOptions && formInput && dropdownItems.length > 0) {
  inputText.addEventListener('click', function(event) {
    event.stopPropagation();
    
    if (dropdownOptions.classList.contains('visually-hidden')) {
      dropdownOptions.classList.remove('visually-hidden');
    } else {
      dropdownOptions.classList.add('visually-hidden');
    }
  });

  dropdownItems.forEach(function(item) {
    item.addEventListener('click', function() {
      dropdownItems.forEach(function(otherItem) {
        otherItem.classList.remove('dropdown-options__item--active');
      });
      item.classList.add('dropdown-options__item--active');
      const selectedValue = item.textContent;
      dropdownOptions.classList.add('visually-hidden');
      formInput.value = selectedValue;
    });
  });

  document.addEventListener('click', function(event) {
    if (!dropdownOptions.contains(event.target) && event.target !== inputText) {
      dropdownOptions.classList.add('visually-hidden');
    }
  });
}
