import { faker } from '@faker-js/faker'

export const updateActivity = {
  'name': `Auto ${faker.datatype.uuid()}`,
  'isActive': true,
  'isAllowsAllTeams': true,
  'teams': []
}