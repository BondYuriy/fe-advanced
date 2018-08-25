import Model from './../js/model';
import axios from 'axios';

jest.mock('axios');

describe('class mobel', () => {
  it('should create Model instance', () => {
    const model = new Model();
    expect(model instanceof Model).toBe(true);
  })

  it('should contain starting items', () => {
    const model = new Model({ "text": "https://github.com/", "id": 5 });
    expect(model.items).toEqual({ "text": "https://github.com/", "id": 5 })
  })

  it('should add data', () => {
    const model = new Model();
    expect.assertions(1);

    const id = 5;
    const text = 'https://github.com';
    const response = { data: { "text": text, "id": id } };
    const result = { "text": text, "id": id };

    axios.post.mockResolvedValue(response);

    return model.addData(text)
      .then(item => {
        expect(item).toEqual(result)
      })
      .catch(err => {
        expect(err).nottoBeNull();
      })
  })

  it('should remove data', () => {
    const model = new Model();
    expect.assertions(2);

    const id = 5;
    const response = {
      data: {},
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    const result = expect.objectContaining({ status: 200 });

    axios.delete.mockResolvedValue(response);

    return model.removeData(id)
      .then(item => {
        expect(item).toEqual(result)
      })
      .catch(err => {
        expect(err).not.toBeNull();
      })
  })

  it('should contain all data', () => {
    const model = new Model();
    expect.assertions(1);

    const id = 5;
    const text = 'https://github.com';
    const response = { data: { "text": text, "id": id } };
    const result = { "text": text, "id": id };

    axios.get.mockResolvedValue(response);

    return model.fetchDataInitStory(id)
      .then(data => {
        expect(data).toEqual(result)
      })
      .catch(err => {
        expect(err).not.toBeNull()
      })
  })
})
