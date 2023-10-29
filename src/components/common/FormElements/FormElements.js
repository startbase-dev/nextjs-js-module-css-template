import {
  AmountInput,
  Checkbox,
  Form,
  Input,
  NumberInput,
  PasswordInput,
  PhoneInput,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextArea,
} from '@start-base/react-form-elements';

import styles from './FormElements.module.scss';

const CustomForm = ({ children, ...props }) => (
  <Form {...props}>{children}</Form>
);
const CustomInput = (props) => (
  <Input
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomTextArea = (props) => (
  <TextArea
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomCheckbox = (props) => (
  <Checkbox
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomRadio = (props) => (
  <Radio
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomSwitch = (props) => (
  <Switch
    {...props}
    inputClassName={styles.switchInput}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomRadioGroup = (props) => (
  <RadioGroup
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    optionLabelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomPasswordInput = (props) => (
  <PasswordInput
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomAmountInput = (props) => (
  <AmountInput
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomNumberInput = (props) => (
  <NumberInput
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomPhoneInput = (props) => (
  <PhoneInput
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
  />
);

const CustomSelect = (props) => (
  <Select
    {...props}
    inputClassName={styles.input}
    labelClassName={styles.label}
    errorClassName={styles.errorLabel}
    classNames={{
      menu: () => styles.menu,
      control: (state) =>
        state.isFocused ? styles.inputFocused : styles.input,
    }}
  />
);

export {
  CustomForm,
  CustomInput,
  CustomTextArea,
  CustomCheckbox,
  CustomRadio,
  CustomSwitch,
  CustomRadioGroup,
  CustomPasswordInput,
  CustomAmountInput,
  CustomNumberInput,
  CustomSelect,
  CustomPhoneInput,
};
