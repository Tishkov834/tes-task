<script setup>
import { computed, onMounted, ref } from 'vue';
import { useForm } from 'vee-validate';
import { useToast } from 'vue-toastification';

import { getUsers } from '@/api/getUsers';
import { createUser } from '@/api/createUser';
import { getPositions } from '@/api/getPositions';
import Layout from '@/components/Layout';
import InfoSection from '@/components/InfoSection';
import UsersSection from '@/components/UsersSection';
import CreateUserSection from '@/components/CreateUserSection';
import { createUserValidationSchema } from '@/helpers/validationSchema';
import SuccessSection from '@/components/SuccessSection';

const usersList = ref([]);

const currantPage = ref(1);

const totalPages = ref(0);

const selectedOption = ref(1);

const positions = ref([]);

const selectedFile = ref(null);

const fileName = ref('');

const isUserSuccessCreated = ref(false);

const {
  values, validate, setFieldError, isFieldDirty, isFieldValid,
} = useForm({
  validationSchema: createUserValidationSchema,
});

const toast = useToast();

const isFormValid = computed(() => (
  isFieldDirty('name') && isFieldValid('name')
  && isFieldDirty('email') && isFieldValid('email')
  && isFieldDirty('phone') && isFieldValid('phone')
  && isFieldDirty('photo') && isFieldValid('photo')
));

const showMoreUsers = async () => {
  await getUsers(++currantPage.value, 6).then(({ users, total_pages, page }) => {
    usersList.value = [...usersList.value, ...users];
    totalPages.value = total_pages;
    currantPage.value = page;
  }).catch(() => {
    toast.error('Something went wrong, please check your connection or try later');
  });
};

const handleFileChange = (file) => {
  selectedFile.value = file;

  fileName.value = file ? file.name : '';

  validate('photo').then((result) => {
    if (!result) {
      setFieldError('photo', 'Invalid file');
    }
  });
};

const updateSelectedOption = (value) => {
  selectedOption.value = value;
};

const handleCreateUser = async () => {
  const user = {
    name: values.name,
    email: values.email,
    phone: values.phone,
    position_id: selectedOption.value,
    photo: selectedFile.value,
  };

  await createUser(user)
    .then(async (response) => {
      if (response?.success) {
        await getUsers(1, 6).then(({ users, total_pages, page }) => {
          usersList.value = [...users];
          totalPages.value = total_pages;
          currantPage.value = page;
        }).catch(() => {
          toast.error('Something went wrong, please check your connection or try later');
        });

        isUserSuccessCreated.value = true;
      }
    });
};

onMounted(async () => {
  try {
    await getPositions().then((data) => {
      positions.value = data;
    });

    await getUsers(currantPage.value, 6).then(({ users, total_pages }) => {
      usersList.value = [...users];
      totalPages.value = total_pages;
    });
  } catch (error) {
    toast.error('Something went wrong, please check your connection or try later');
  }
});
</script>

<template>
  <Layout>
    <div class="main-page-content">
     <InfoSection />
     <UsersSection
       :users-list="usersList"
       :currant-page="currantPage"
       :total-pages="totalPages"
       :show-more-users="showMoreUsers"
     />
     <CreateUserSection
      v-if="!isUserSuccessCreated"
      :positions="positions"
      :selected-option="selectedOption"
      :file-name="fileName"
      :is-form-valid="isFormValid"
      :update-selected-option="updateSelectedOption"
      :handle-file-change="handleFileChange"
      :handle-create-user="handleCreateUser"
     />
      <SuccessSection v-if="isUserSuccessCreated"/>
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.main-page-content {
  height: 100%;
  width: 1170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;
  margin-bottom: 100px;
}

</style>
