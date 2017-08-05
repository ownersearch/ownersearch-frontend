import http from 'axios'
import window from 'window'

export const submitForm = (formData) => ({
  type: 'CONTACT/SUBMIT_FORM',
  payload: http({
    method: 'POST',
    url: `${window.location.origin}/api/v1/boop`,
    data: {
      identify: {
        userId: formData.email,
        traits: {
          firstName: formData.firstname,
          lastName: formData.lastname,
          email: formData.email,
        },
      },
      track: {
        userId: formData.email,
        event: 'Submitted Contact Form',
        properties: {
          subject: formData.subject,
          message: formData.message,
          formUrl: window.location.pathname,
        },
      },
    },
  }),
})
