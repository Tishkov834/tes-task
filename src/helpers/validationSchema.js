import * as Yup from 'yup';

export const createUserValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Username is required')
    .min(2, 'Username should contain at least 2 characters')
    .max(60, 'Username should contain at most 60 characters'),
  email: Yup.string()
    .required('Email is required')
    .min(2, 'Email should contain at least 2 characters')
    .max(100, 'Email should contain at most 100 characters')
    .matches(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      'User email, must be a valid email',
    ),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^\+?380([0-9]{9})$/, 'Invalid phone number. Should start with +380 and have 9 digits after that'),
  photo: Yup.mixed().required('Photo is required').test('photo', 'Invalid file', (file) => {
    if (!file) {
      return true;
    }

    const allowedFormats = ['image/jpeg', 'image/jpg'];
    const maxFileSize = 5 * 1024 * 1024; // 5 Mb
    const minImageSize = 70;

    if (!allowedFormats.includes(file.type)) {
      return false;
    }

    if (file.size > maxFileSize) {
      return new Yup.ValidationError('File size exceeds the limit 5 Mb', file, 'photo');
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);

    return new Promise((resolve) => {
      img.onload = () => {
        if (img.width < minImageSize || img.height < minImageSize) {
          resolve(new Yup.ValidationError('Image size is less than required 70x70px', file, 'photo'));
        } else {
          resolve(true);
        }
      };
    });
  }),
});
