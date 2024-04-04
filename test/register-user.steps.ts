import { defineFeature, loadFeature } from 'jest-cucumber';

jest.setTimeout(200000);

const feature = loadFeature('test/register-user.feature');

defineFeature(feature, (test) => {
  test('User enters user data', ({ when, then }) => {
    when(
      /a "(.[^"]*)" request is made to path "(.[^"]*)" with body:$/,
      async (method: string, path: string, body: string) => {
        console.log('Method: ', method);
        console.log('Path: ', path);
        console.log('Body: ', body);
      },
    );
    then(/^the response body should be:$/, (data: string) => {
      const body = {
        email: 'user@email.com',
        firstName: 'Test',
        lastName: 'User',
      };
      expect(body).toEqual(JSON.parse(data));
    });
  });
});
