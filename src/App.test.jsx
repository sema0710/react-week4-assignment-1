import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockReturnValue({ newId: 100, taskTitle: '', tasks: [] }),
  useDispatch: () => jest.fn(),
}));

describe('App', () => {
  beforeEach(() => {

  });
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/추가/)).not.toBeNull();

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
