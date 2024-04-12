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

  it('persists user data', async () => {
    const appService = new AppService();
    const mockData = JSON.parse(
      '{"email": "user@email.com", "password": "8747af0bb4c025183ae690a3417545915d2f231a505d7ce669fdfedf66af0947", "firstName": "Test", "lastName": "User"}',
    );
    const registerUserResponse = appService.createUser(mockData);
    const result = {
      id: '0dcb8f7f-3563-4f96-abbb-f6be87db351c',
    };
    expect(registerUserResponse).toEqual(result);
  });

  it('verifies user credentials', async () => {
    const appService = new AppService();
    const mockData = JSON.parse(
      '{"email": "user@email.com", "password": "8747af0bb4c025183ae690a3417545915d2f231a505d7ce669fdfedf66af0947"}',
    );
    const verifyUserResponse = appService.verifyUser(mockData);
    // const result = {
    //   id: '0dcb8f7f-3563-4f96-abbb-f6be87db351c',
    // };
    // expect(registerUserResponse).toEqual(result);
  });
});
