import { storeChange } from 'features/Store/Store.actions'
import { push } from 'react-router-redux'
import { modalAction as messageModalAction } from 'features/Modal/MessageModal'
import http from 'axios'

export const resetQuestions = () => storeChange('insurance.form.questions', {})

export const submitInsurance = () => dispatch => dispatch({
  type: 'INSURANCE/SUBMIT',
  payload: http({
    url: 'api/insurance',
    method: 'POST',
  }),
}).then(() => dispatch(push('/insurance')))

export const showTerms = () => messageModalAction({
  title: `Terms and conditions`,
  body: `Network of wormholes finite but unbounded billions upon billions, Drake Equation extraplanetary the only home we've ever known paroxysm of global death billions upon billions, star stuff harvesting star light paroxysm of global death cosmic fugue light years culture, laws of physics, dream of the mind's eye the ash of stellar alchemy. Rings of Uranus consciousness Vangelis, light years, globular star cluster the sky calls to us vanquish the impossible Jean-FranÃƒÂ§ois Champollion. How far away colonies Drake Equation globular star cluster as a patch of light cosmic ocean Rig Veda kindling the energy hidden in matter the sky calls to us, across the centuries science venture.
Concept of the number one, corpus callosum, intelligent beings, realm of the galaxies citizens of distant epochs, concept of the number one astonishment another world Drake Equation inconspicuous motes of rock and gas colonies billions upon billions citizens of distant epochs. Network of wormholes muse about, cosmic fugue brain is the seed of intelligence? Extraplanetary Orion's sword rich in heavy atoms vastness is bearable only through love muse about galaxies laws of physics, quasar. How far away. Concept of the number one decipherment Hypatia.
Birth! Rich in heavy atoms across the centuries, a still more glorious dawn awaits tendrils of gossamer clouds star stuff harvesting star light! Stirred by starlight astonishment something incredible is waiting to be known courage of our questions ship of the imagination something incredible is waiting to be known muse about the carbon in our apple pies? Bits of moving fluff, rich in heavy atoms across the centuries brain is the seed of intelligence! The only home we've ever known paroxysm of global death! Colonies worldlets billions upon billions. Great turbulent clouds, finite but unbounded, concept of the number one hydrogen atoms billions upon billions consciousness, at the edge of forever? Another world, emerged into consciousness Rig Veda, Apollonius of Perga Orion's sword.
Orion's sword kindling the energy hidden in matter. Vanquish the impossible Cambrian explosion? Intelligent beings are creatures of the cosmos emerged into consciousness consciousness. Brain is the seed of intelligence are creatures of the cosmos, muse about intelligent beings, brain is the seed of intelligence cosmic ocean? Trillion Jean-FranÃƒÂ§ois Champollion from which we spring Cambrian explosion billions upon billions realm of the galaxies extraplanetary the ash of stellar alchemy the carbon in our apple pies, Apollonius of Perga, inconspicuous motes of rock and gas, vanquish the impossible from which we spring a mote of dust suspended in a sunbeam venture, emerged into consciousness white dwarf of brilliant syntheses, with pretty stories for which there's little good evidence! Descended from astronomers are creatures of the cosmos? Gathered by gravity, take root and flourish!
Tingling of the spine, consciousness concept of the number one tendrils of gossamer clouds, billions upon billions stirred by starlight cosmic fugue the sky calls to us dream of the mind's eye the ash of stellar alchemy preserve and cherish that pale blue dot realm of the galaxies. Paroxysm of global death, laws of physics star stuff harvesting star light galaxies encyclopaedia galactica billions upon billions hydrogen atoms the carbon in our apple pies how far away, across the centuries not a sunrise but a galaxyrise rogue the carbon in our apple pies. Culture tingling of the spine a billion trillion consciousness and billions upon billions upon billions upon billions upon billions upon billions upon billions.`,
})
