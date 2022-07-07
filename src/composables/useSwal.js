// libs
import Swal from 'sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'

export default () => ({
  success (_options = {}) {
    const options = Object.assign(_options, {
      title: 'Success',
      text: 'The operation has been resolved successfully!'
    })

    return Swal.fire({
      ...options,
      icon: 'success'
    })
  },

  error (_options = {}) {
    const options = Object.assign(_options, {
      title: 'Error',
      text: 'The operation has been rejected. Something went wrong!'
    })

    return Swal.fire({
      ...options,
      icon: 'error'
    })
  },

  warning (_options = {}) {
    const options = Object.assign(_options, {
      title: 'Warning',
      text: 'Warning'
    })

    return Swal.fire({
      ...options,
      icon: 'warning'
    })
  },

  prompt (_options = {}) {
    const { onConfirm, onDeny, ...options } = Object.assign(_options, {
      title: 'Prompt',
      text: 'Are you sure?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`
    })

    const invokeFn = fn => typeof fn === 'function' && fn()

    return Swal
      .fire({
        ...options,
        icon: 'info'
      })
      .then(result => {
        return invokeFn(result.isConfirmed ? onConfirm : onDeny)
      })
  }
})