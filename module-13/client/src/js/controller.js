export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.model.fetchDataInitStory().then(data => this.view.initStory(data));

    view.on('add', this.addNote.bind(this));
    view.on('remove', this.removeNote.bind(this));
  }

  addNote(text) {
    this.model.addData(text).then(item => this.view.addElem(item));
  }

  removeNote(id) {
    this.model.removeData(id).then(idRemove => this.view.removeElem(idRemove));
  }
}