import { Seeder } from 'mongoose-data-seed';
import { User } from '../server/models';

const seedData = [
    {
        'first': 'Beth',
        'last': 'Bradford',
        'school': 'Wayne State University' ,
        'speciality': 'Stoke patients Cerebral vascular Accidents 10:16 Dementia, routine reastablishment',
        'time': 27,
        'location' : 'ASSENSION HEALTH SOURHTIELD MICHIGAN',
        'takeInsurance': true,
        'privatePay': true
      },
      {
        'first': 'Nancy',
        'middle': 'Jones',
        'last': 'Broadway',
        'school': 'Cleary College' ,
        'speciality': 'Clinical Specialist - Pulmonary Rehab, Certified Lymphedema Therapist - Acute Care Management',
        'time': 30,
        'location': '',
        'takeInsurance': true,
        'privatePay': true
      },
      {
        'first': 'Eugene',
        'last': 'Gersh',
        'school': 'Temple University' ,
        'speciality': ' Hand Therapy, Health Information',
        'time': 12,
        'location': 'New York University Lingone Health',
        'takeInsurance': true,
        'privatePay': true
      },
      {
        'first': 'Beth',
        'last': 'Bradford',
        'school': 'Wayne State University' ,
        'speciality': 'Stoke patients Cerebral vascular Accidents 10:16 Dementia, routine reastablishment',
        'time': 27,
        'location' : 'ASSENSION HEALTH SOURHTIELD MICHIGAN',
        'takeInsurance': true,
        'privatePay': true
      },
      {
        'first': 'Beth',
        'last': 'Bradford',
        'school': 'Wayne State University' ,
        'speciality': 'Stoke patients Cerebral vascular Accidents 10:16 Dementia, routine reastablishment',
        'time': 27,
        'location' : 'ASSENSION HEALTH SOURHTIELD MICHIGAN',
        'takeInsurance': true,
        'privatePay': true
      },
      {
        'first': 'Beth',
        'last': 'Bradford',
        'school': 'Wayne State University' ,
        'speciality': 'Stoke patients Cerebral vascular Accidents 10:16 Dementia, routine reastablishment',
        'time': 27,
        'location' : 'ASSENSION HEALTH SOURHTIELD MICHIGAN',
        'takeInsurance': true,
        'privatePay': true
      },
      {
        'first': 'Beth',
        'last': 'Bradford',
        'school': 'Wayne State University' ,
        'speciality': 'Stoke patients Cerebral vascular Accidents 10:16 Dementia, routine reastablishment',
        'time': 27,
        'location' : 'ASSENSION HEALTH SOURHTIELD MICHIGAN',
        'takeInsurance': true,
        'privatePay': true
      },
]

class therapistSeeder extends Seeder {
    async shouldRun() {
      return User.countDocuments()
        .exec()
        .then(count => count === 0);
    }
   
    async run() {
      return User.create(seedData);
    }
  }
   
  export default UsersSeeder;