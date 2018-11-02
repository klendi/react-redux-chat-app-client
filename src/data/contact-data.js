import pfp from '../assets/img/ryan.jpg'
import pfp1 from '../assets/img/mike.jpg'
import pfp2 from '../assets/img/james.jpg'
import store from '../store'
import status from '../utils/StatusEnum'

export const user = {
  id: 0,
  name: 'John',
  lastName: 'Klendi',
  email: 'klendi@gmail.com',
  pic: pfp2,
  status: status.busy,
  contacts: [
    {
      id: 1,
      messages: [
        {
          //means this message it's sent by others, not the user that logged in rn
          isThisUser: false,
          content: 'Hello',
          sentOn: new Date()
        },
        {
          isThisUser: false,
          content: 'How you doing?',
          sentOn: new Date()
        },
        {
          isThisUser: true,
          content: 'Everything good, what about you ?',
          sentOn: new Date()
        }
      ]
    },
    {
      id: 2,
      messages: []
    },
    {
      id: 3,
      messages: []
    },
    {
      id: 4,
      messages: []
    },
    {
      id: 5,
      messages: []
    },
    {
      id: 6,
      messages: []
    },
    {
      id: 7,
      messages: []
    },
    {
      id: 8,
      messages: []
    }
  ]
}

export const data = [
  {
    id: 1,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'John',
    lastName: 'Doe',
    email: 'klendi@gmail.com',
    pic: pfp2,
    status: status.idle
  },
  {
    id: 2,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Klendi',
    lastName: 'Doe',
    email: 'klendi@gmail.com',
    pic: pfp,
    status: status.offline
  },
  {
    id: 3,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Hello',
    lastName: 'Joe',
    email: 'klendi@gmail.com',
    pic: pfp1,
    status: status.busy
  },
  {
    id: 4,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Brod',
    lastName: 'Met',
    email: 'klendi@gmail.com',
    pic: pfp2,
    status: status.busy
  },
  {
    id: 5,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'No',
    lastName: 'U',
    email: 'klendi@gmail.com',
    pic: pfp,
    status: status.busy
  },
  {
    id: 6,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Try',
    lastName: 'Me',
    email: 'klendi@gmail.com',
    pic: pfp2,
    status: status.busy
  },
  {
    id: 7,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Try',
    lastName: 'Me',
    email: 'klendi@gmail.com',
    pic: pfp2,
    status: status.busy
  },
  {
    id: 8,
    contacts: [
      {
        id: 0,
        messages: []
      }
    ],
    name: 'Try',
    lastName: 'Me',
    email: 'klendi@gmail.com',
    pic: pfp2,
    status: status.busy
  }
]

export const getUserByID = id => {
  return store
    .getState()
    .users.data.find(user => user.id.toString() === id.toString())
}
