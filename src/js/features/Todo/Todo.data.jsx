import { get } from 'lodash'

const getTodoItems = state => ({
  superSearch: {
    title: 'Search for Super',
    complete: get(state, 'member.data.tfn.length') > 0,
    descrip: `We've got your TFN. Searching for your super is just a click away.`,
    buttonText: 'Search for super',
    buttonTo: '/super-search',
  },
  chooseInvestments: {
    title: 'Choose Investments',
    complete: false,
    descrip: `Want to investment in one of Zuper's super portfolios?`,
    buttonText: 'Choose investments',
    buttonTo: '/investments/choose',
  },
  tellEmployer: {
    title: 'Tell your employer',
    complete: false,
    descrip: `Let your employer know that you've moved your Super to Zuper.`,
    buttonText: 'Notify Employer',
    buttonTo: '/settings',
  },
  rollover: {
    title: 'Rollover Insurance',
    complete: false,
    descrip: `Select insurance`,
    buttonText: 'Select Insurance',
    buttonTo: '/insurance/choose',
  },
  finalise: {
    title: 'Finalise Details',
    complete: false,
    descrip: 'descrip',
    buttonText: 'Update settings',
    buttonTo: '/settings',
  },
})

const todoItemsOrder = ['superSearch', 'chooseInvestments', 'tellEmployer', 'rollover', 'finalise']

export default (state) => {
  const todoItems = getTodoItems(state)
  return todoItemsOrder.map(item => todoItems[item])
}
