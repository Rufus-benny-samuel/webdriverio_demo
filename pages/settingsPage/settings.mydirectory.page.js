class MyDirectory {
  get contactTab() {
    return $('//a[text()="Contacts"]');
  }
  get addContact() {
    return $('//button[text()="+"]');
  }
  get importContact() {
    return $('#import-contact');
  }
  get addButton() {
    return $('//button[text()="Add Contacts"]');
  }
  get importButton() {
    return $('//button[text()="Import"]');
  }
  get notificationMessage() {
    return $('#import-notification p');
  }
}
module.exports = new MyDirectory();
