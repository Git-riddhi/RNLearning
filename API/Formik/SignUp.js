import React from 'react'
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	StatusBar,
	TextInput,
	Button,
} from 'react-native'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
// import CustomInput from './CustomInput'

const SignUpValidation = () => {

	const signUpValidationSchema = yup.object().shape({
		fullName: yup
			.string()
			.matches(/(\w.+\s).+/, 'Enter at least 2 names')
			.required('Full name is required'),
		phoneNumber: yup
			.string()
			.matches(/(9||8||7)(\d){9}\b/, 'Enter a valid phone number')
			.required('Phone number is required'),
		email: yup
			.string()
			.email("Please enter valid email")
			.required('Email is required'),
		password: yup
			.string()
			.matches(/\w*[a-z]\w*/, "Password must have a small letter")
			.matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
			.matches(/\d/, "Password must have a number")
			.matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
			.min(8, ({ min }) => `Password must be at least ${min} characters`)
			.required('Password is required'),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password')], 'Passwords do not match')
			.required('Confirm password is required'),
	})

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView style={styles.container}>
				<View style={styles.signupContainer}>
					<Text>Sign Up Screen</Text>

					<Formik
						validationSchema={signUpValidationSchema}
						initialValues={{
							fullName: '',
							email: '',
							phoneNumber: '',
							password: '',
							confirmPassword: '',
						}}
						onSubmit={values => console.log(values)}
					>
						{({ handleSubmit, isValid, handleChange,
							handleBlur, values,
							errors, touched
						}) => (
							<>
								<TextInput
									name="fullName"
									placeholder='Full Name'
									keyboardType='email-address'
									style={styles.textInput}
									onChangeText={handleChange('fullName')}
									// onBlur={handleBlur('fullName')}
									value={values.fullName}
								/>
								{(errors.fullName && touched.fullName) &&
									<Text style={styles.errorText}>
										{errors.fullName}
									</Text>
								}
								<TextInput
									name="email"
									placeholder="Email Address"
									keyboardType="email-address"
									style={styles.textInput}
									onChangeText={handleChange('email')}
									// onBlur={handleBlur('email')}
									value={values.email}
								/>
								{(errors.email && touched.email) &&
									<Text style={styles.errorText}>
										{errors.email}
									</Text>
								}
								<TextInput
									name="phoneNumber"
									placeholder="Phone Number"
									keyboardType="numeric"
									style={styles.textInput}
									onChangeText={handleChange('phoneNumber')}
									// onBlur={handleBlur('phoneNumber')}
									value={values.phoneNumber}
								/>
								{(errors.phoneNumber && touched.phoneNumber) &&
									<Text style={styles.errorText}>
										{errors.phoneNumber}
									</Text>
								}
								<TextInput
									name="password"
									placeholder="Password"
									secureTextEntry
									style={styles.textInput}
									onChangeText={handleChange('password')}
									// onBlur={handleBlur('password')}
									value={values.password}
								/>
								{(errors.password && touched.password) &&
									<Text style={styles.errorText}>
										{errors.password}
									</Text>
								}
								<TextInput
									name="confirmPassword"
									placeholder="Confirm Password"
									secureTextEntry
									style={styles.textInput}
									onChangeText={handleChange('confirmPassword')}
									// onBlur={handleBlur('confirmPassword')}
									value={values.confirmPassword}
								/>
								{(errors.confirmPassword && touched.confirmPassword) &&
									<Text style={styles.errorText}>
										{errors.confirmPassword}
									</Text>
								}

								<Button
									onPress={handleSubmit}
									title="SIGN UP"
									disabled={!isValid}
								/>
							</>
						)}
					</Formik>

				</View>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	signupContainer: {
		width: '80%',
		alignItems: 'center',
		backgroundColor: 'white',
		padding: 10,
		elevation: 10,
		backgroundColor: '#e6e6e6',
	},
	textInput: {
		height: 40,
		width: '100%',
		margin: 10,
		backgroundColor: 'white',
		borderColor: 'gray',
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 10,
	},
	errorText: {
		fontSize: 10,
		color: 'red',
	},
})
export default SignUpValidation