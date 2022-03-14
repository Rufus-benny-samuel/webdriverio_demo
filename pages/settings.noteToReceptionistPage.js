const elementUtil = require('../utils/elementUtil');

class NoteToReceptionist {
  get number() {
    return $('li.card.active p');
  }
  get addNotesText() {
    return $('textarea.g-textarea');
  }
  get datePicker() {
    return $('(//input[@class="flatpickr-input"])[1]');
  }
  get nextDay() {
    return $('.today').nextElement();
  }
  get saveButton() {
    return $('//button[text()="Save"]');
  }
  get notification() {
    return $('div.g-notification p');
  }
  get editNote() {
    return $('//button[text()="Edit"]');
  }
  get deleteNote() {
    return $('//button[text()="Delete"]');
  }
}
module.exports = new NoteToReceptionist();
