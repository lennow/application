import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
// import { AppModule } from './app.module';

describe('UserDataManagement', () => {
  jest.setTimeout(200000);
  let moduleRef;

  beforeAll(async () => {
    const module = require('./app.module');
    moduleRef = await Test.createTestingModule({
      imports: [module.AppModule],
    }).compile();

    await moduleRef.init();
  });

  // it('persists user data', async () => {
  //   const appService = new AppService();
  //   const mockData = JSON.parse(
  //     '{"email": "user@email.com", "password": "8747af0bb4c025183ae690a3417545915d2f231a505d7ce669fdfedf66af0947", "firstName": "Test", "lastName": "User"}',
  //   );
  //   const registerUserResponse = appService.createUser(mockData);
  //   const result = {
  //     id: '0dcb8f7f-3563-4f96-abbb-f6be87db351c',
  //   };
  //   expect(registerUserResponse).toEqual(result);
  // });

  // it('verifies user credentials', async () => {
  //   const appService = new AppService();
  //   const mockData = JSON.parse(
  //     '{"email": "user@email.com", "password": "8747af0bb4c025183ae690a3417545915d2f231a505d7ce669fdfedf66af0947"}',
  //   );
  //   const verifyUserResponse = appService.verifyUser(mockData);
  //   const result = {
  //     id: '0dcb8f7f-3563-4f96-abbb-f6be87db351c',
  //   };
  //   expect(verifyUserResponse).toEqual(result);
  // });

  // it('returns user data by id', async () => {
  //   const appService = new AppService();
  //   const mockData = '0dcb8f7f-3563-4f96-abbb-f6be87db351c';
  //   const getUserResponse = appService.getUserById(mockData);
  //   const result = {
  //     id: '0dcb8f7f-3563-4f96-abbb-f6be87db351c',
  //     email: 'user@email.com',
  //     firstName: 'Test',
  //     lastName: 'User',
  //   };
  //   expect(getUserResponse).toEqual(result);
  // });

  it('updates user firstname', async () => {
    const appService = new AppService();
    const userId = '0dcb8f7f-3563-4f96-abbb-f6be87db351c';
    const mockData = JSON.parse('{"firstName": "Some"}');
    const registerUserResponse = appService.updateUserData(userId, mockData);
    const result = {
      id: '0dcb8f7f-3563-4f96-abbb-f6be87db351c',
    };
    expect(registerUserResponse).toEqual(result);
  });
});
