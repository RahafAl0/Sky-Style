import axios from 'axios';

describe('POST: http://localhost:3333/api/users/register', () => {
  it('should create new user', async () => {
    const response = await axios.post('http://localhost:3333/api/users/register', {
      username: 'test',
      password: 'test',
      email: 'test2@test2.test'
    })
    expect(response.status).toBe(201)
    expect(response.data.id).toBeDefined()
  })
})
