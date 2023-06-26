// import React, { useEffect, useState } from "react";
// // import View from "@core/inputs/View/View";
// // import Button from "@core/inputs/Button";
// // import { styles } from "./styles";
// // import UnderlineText from "@core/inputs/Text/UnderlineText";
// // import { useStaticContent } from "@dom-digital-online-media/dom-static-content-sdk";
// // import FontBoldText from "@core/inputs/Text/FontBoldText";
// // import ScrollView from "@core/inputs/View/ScrollView";
// // import { Formik } from 'formik';
// // import CustomTextInput from "@core/inputs/TextInput";
// // import Divider from "@core/layout/Divider";
// // import { useSimValidation } from "@context/MobileOne/Activation/SimActivation";
// // import CancelContract from "@parts/Login/CancelContract";
// // import ForgotPasswodModal from "@parts/Activation/ForgotPasswodModal";
// // import NewPasswordModal from "@parts/Activation/NewPasswordModal";
// // import OtpModal from "@parts/Activation/OtpModal";
// // import Alert from "@core/utiles/Alert";
// // import { useAccount } from "@context/MobileOne/Account";
// // import Hud from "@core/inputs/Hud";
// // import CheckBoxWithTextClick from "@core/inputs/View/CheckBoxWithTextClick";
// // import { useCustomer } from "@context/MobileOne/Customer";
// // import { TrackEvent, TrackView, UTAG_EVENTS, UTAG_VIEWS } from "@utils/constant/utag";
// import { StyleSheet,View , Button, TouchableOpacity, TextInput, Text } from 'react-native'
// // import DatePicker from 'react-native-date-picker'
// // import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
// // import DateTimePickerModal from "react-native-modal-datetime-picker";

// // import moment from 'moment';
// // import CalendarPicker from 'react-native-calendar-picker';


// import { LocaleConfig } from 'react-native-calendars';

// LocaleConfig.locales['fr'] = {
// 	monthNames: [
// 		'Janvier',
// 		'Février',
// 		'Mars',
// 		'Avril',
// 		'Mai',
// 		'Juin',
// 		'Juillet',
// 		'Août',
// 		'Septembre',
// 		'Octobre',
// 		'Novembre',
// 		'Décembre'
// 	],
// 	monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
// 	dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
// 	dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
// 	today: "Aujourd'hui"
// };
// LocaleConfig.defaultLocale = 'fr';

// const Calender = (props) => {

// 	// const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
// 	// const [selectedDate, setSelectedDate] = useState(new Date());

// 	const [selected, setSelected] = useState('');
	
// 	// const showDatePicker = () => {
// 	// 	setDatePickerVisibility(true);
// 	// };

// 	// const hideDatePicker = () => {
// 	// 	setDatePickerVisibility(false);
// 	// };

// 	// const handleConfirm = (date) => {
// 	// 	setSelectedDate(date);
// 	// 	hideDatePicker();
// 	// };


// 	// const [date, setDate] = useState(new Date())
// 	// const [open1, setOpen1] = useState(false)

// 	// const startDate = selectedStartDate ? selectedStartDate.format("DD-MM-YYYY").toString() : '';
// 	//  const startDate = selectedStartDate ? moment(selectedStartDate).format("DD-MM-YYYY") : '';


// 	// const [selectedStartDate, setSelectedStartDate] = useState(null);
// 	// const [selectedEndDate, setSelectedEndDate] = useState(null);

// 	// const onDateChange = (date, type) => {
// 	// 	//function to handle the date change
// 	// 	if (type === 'END_DATE') {
// 	// 		setSelectedEndDate(date);
// 	// 	} else {
// 	// 		setSelectedEndDate(null);
// 	// 		setSelectedStartDate(date);
// 	// 	}
// 	// };

// 	const { t } = useStaticContent();

// 	const {
// 		onRegistrationPress,
// 		onRegistrationPress2,
// 		loginCredentialInitialValue,
// 		validateLoginCredentialSchma,
// 		secureTextEntryPassword,
// 		passwordRightIconPress,
// 		showForgotPassword,
// 		onCancelForgotPasswordPress,
// 		onForgotPassword,
// 		showOtpModal,
// 		onCancelOtpPress,
// 		onForgotPasswordButtonClick,
// 		onOtpButtonClick,
// 		showNewPasswordModal,
// 		onCancelNewPasswordPress,
// 	} = useSimValidation()

// 	const { showCancelContract, onCancelContractPress, onContractPress } = useCustomer();

// 	// const { onPostIdentAndroidPress,onPostIdentIosPress } = useSimValidation()

// 	const {
// 		onUserPasswordLogin,
// 		onSmartLoginClick,
// 		onSmartLoginPress,
// 		smartLogin,
// 		isLoading
// 	} = useAccount()

// 	useEffect(() => {
// 		onSmartLoginClick(props)
// 	}, []);

// 	// Track Login Mounting
// 	useEffect(() => {
// 		const unsubscribe = props.navigation.addListener('focus', () => {
// 			TrackView(UTAG_VIEWS.LOGIN_MOUNTING);
// 		});
// 		return unsubscribe;
// 	}, [props.navigation]);

// 	return (
// 		<ScrollView style={styles.mainContainer}>
// 			<View requiredSafeArea>
// 				<FontBoldText style={styles.headerTextStyle}>{t('sh_login_share')}</FontBoldText>

// 				<Formik
// 					initialValues={loginCredentialInitialValue}
// 					onSubmit={values => {
// 						TrackEvent(UTAG_EVENTS.LOGIN_ON_SUBMIT);
// 						onUserPasswordLogin(props, values);
// 					}}
// 					enableReinitialize
// 					validationSchema={validateLoginCredentialSchma}
// 				>
// 					{({
// 						handleSubmit,
// 						setFieldValue,
// 						touched,
// 						values,
// 						errors,
// 					}) =>
// 						<>
// 							<View>
// 								<CustomTextInput
// 									mode="flat"
// 									placeholder={t('sh_login_phone_number')}
// 									label={t('sh_login_phone_number')}
// 									value={values.username}
// 									onChangeText={(text) => {
// 										setFieldValue('username', text)
// 									}}
// 									InputStyle={styles.textInputTextstyle}
// 									type={'number'}
// 									isLastFeild={false}
// 									checkForErrorToShow={false}
// 									isAutoCapitalise={false}
// 									errorMessage={errors.username && touched.username ? errors.username : ''}
// 								/>
// 								<CustomTextInput
// 									mode="flat"
// 									placeholder={t('sh_login_password')}
// 									label={t('sh_login_password')}
// 									value={values.password}
// 									onChangeText={(text) => {
// 										setFieldValue('password', text)
// 									}}
// 									InputStyle={styles.textInputTextstyle}
// 									secureTextEntry={secureTextEntryPassword}
// 									rightIcon={!secureTextEntryPassword ? 'eye-outline' : 'eye-off-outline'}
// 									isLastFeild={true}
// 									isAutoCapitalise={false}
// 									rightIconPress={() => { passwordRightIconPress() }}
// 									errorMessage={errors.password && touched.password ? errors.password : ''}
// 								/>
// 							</View>
// 							<Button onPress={handleSubmit}>{t('sh_login_button')}</Button>

// 							<View>
// 								<Button onPress={() => { }} >{t('Open Calender')}</Button>
// 								<Text style={{
// 									width: '95%',
// 									height: 40,
// 									textAlign: 'center',
// 									fontSize: 16,
// 									paddingVertical: 10,
// 									color: 'black',
// 									borderWidth: 2
// 								}}>
// 									{selected ? selected.toString() : 'No date selected'}
// 								</Text>
// 								<Calendar
// 									onDayPress={day => {
// 										setSelected(day.dateString);
// 									}}
// 									markedDates={{
// 										[selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
// 									}}
// 								/>


// 								{/* <Text style={{
// 									width: '95%',
// 									height: 40,
// 									textAlign: 'center',
// 									fontSize: 16,
// 									paddingVertical: 10,
// 									color: 'black',
// 									borderWidth: 2
// 								}}>Date: {startDate}</Text> */}

// 								{/* <DateTimePickerModal
// 									date={selectedDate}
// 									isVisible={isDatePickerVisible}
// 									mode="date"
// 									onConfirm={handleConfirm}
// 									onCancel={hideDatePicker}
// 								/> */}

// 								{/* 
// 								<CalendarPicker
// 									modal
// 									open={open1}
// 									startFromMonday={true}
// 									// allowRangeSelection={true}
// 									minDate={new Date(2018, 1, 1)}
// 									maxDate={new Date(2050, 6, 3)}
// 									weekdays={
// 										[
// 											'Mon',
// 											'Tue',
// 											'Wed',
// 											'Thu',
// 											'Fri',
// 											'Sat',
// 											'Sun'
// 										]}
// 									months={[
// 										'January',
// 										'Febraury',
// 										'March',
// 										'April',
// 										'May',
// 										'June',
// 										'July',
// 										'August',
// 										'September',
// 										'October',
// 										'November',
// 										'December',
// 									]}
// 									previousTitle="Previous"
// 									nextTitle="Next"
// 									todayBackgroundColor="#e6ffe6"
// 									selectedDayColor="#66ff33"
// 									selectedDayTextColor="#000000"
// 									scaleFactor={375}
// 									textStyle={{
// 										fontFamily: 'Cochin',
// 										color: '#000000',
// 									}}
// 									// onDateChange={onDateChange}
// 									onDateChange={(selectedStartDate) => { setSelectedStartDate(selectedStartDate) }}

// 								/> */}
// 								{/* 								
// 									<TextInput style={{
// 										width: 100,
// 										height: 40,
// 										textAlign: 'center',
// 										fontSize: 16,
// 										paddingVertical: 10,
// 										color: 'black',
// 										borderWidth: 2
// 									}}
// 										numberOfLines={1}
// 										// editable={false}
// 										// value={moment(startDate).format("DD-MM-YYYY")}
// 										value={startDate}
// 										// placeholder="Choose Your Date of Birth"
// 									// onFocus={() => { setOpen1(true) }}
// 									/> */}
// 								{/* 
// 									<DatePicker
// 										style={styles.datePickerStyle}
// 										modal
// 										open={open1}
// 										date={date} // Initial date from state
// 										mode="date" // The enum of date, datetime and time
// 										placeholder="select date"
// 										// dateFormat="DD-MM-YYYY"
// 										// minimumDate={new Date("2016-12-31")}
// 										// maximumDate={new Date("2023-12-31")}
// 										onConfirm={(date) => {
// 											setOpen1(false)
// 											setDate(date)
// 										}}
// 										onCancel={() => {
// 											setOpen1(false)
// 										}}
// 										onDateChange={(date) => {
// 											setDate(date);
// 										}}
// 									/> */}

// 							</View>


// 							<UnderlineText style={styles.headerTextStyle} onPress={() => onForgotPassword()} >{t('sh_login_forgot_pw')}</UnderlineText>
// 							<CheckBoxWithTextClick
// 								violetLabelText={t('sh_login_smart-login')}
// 								selectedValue={smartLogin}
// 								onImagePress={() => onSmartLoginPress()}
// 							/>
// 						</>
// 					}
// 				</Formik>
// 				<Divider />
// 				<View style={styles.reguralTextStyle}>
// 					<FontBoldText>{t('sh_login_subheader1')}</FontBoldText>
// 					<UnderlineText onPress={() => onRegistrationPress2(props)} style={styles.UnderlineTextStyle}>{t('sh_login_text1')}</UnderlineText>
// 					<FontBoldText style={styles.buttonStyle}>{t('sh_login_subheader2')}</FontBoldText>
// 					<UnderlineText onPress={() => onRegistrationPress(props)} style={styles.UnderlineTextStyle}>{t('sh_login_text2')}</UnderlineText>
// 					<UnderlineText onPress={() => onContractPress()} style={styles.buttonStyle} >{t('sh_login_cancel_contract')}</UnderlineText>
// 					<FontBoldText style={styles.boldTextStyle}>{t('sh_login_congstar')}</FontBoldText>
// 				</View>

// 				<ForgotPasswodModal
// 					visible={showForgotPassword}
// 					onCancelPress={onCancelForgotPasswordPress}
// 					onForgotPasswordButtonClick={(values) => { onForgotPasswordButtonClick(values) }}
// 				/>

// 				<OtpModal
// 					visible={showOtpModal}
// 					onCancelPress={onCancelOtpPress}
// 					onResendCodePress={onCancelOtpPress}
// 					onOtpButtonClick={onOtpButtonClick}
// 				/>

// 				<NewPasswordModal
// 					visible={showNewPasswordModal}
// 					onCancelPress={onCancelNewPasswordPress}
// 					onNewPasswordButtonClick={onCancelNewPasswordPress}
// 				/>

// 				<CancelContract
// 					visible={showCancelContract}
// 					headerText={t('vertrag kundigen')}
// 					descriptionText={t('sh_apoc_number-portability_subheader2')}
// 					onCancelPress={onCancelContractPress}

// 				/>


// 				<ForgotPasswodModal
// 					visible={showForgotPassword}
// 					onCancelPress={onCancelForgotPasswordPress}
// 					onForgotPasswordButtonClick={(values) => { onForgotPasswordButtonClick(values) }}
// 				/>

// 				<OtpModal
// 					visible={showOtpModal}
// 					onCancelPress={onCancelOtpPress}
// 					onResendCodePress={onCancelOtpPress}
// 					onOtpButtonClick={onOtpButtonClick}
// 				/>

// 				<NewPasswordModal
// 					visible={showNewPasswordModal}
// 					onCancelPress={onCancelNewPasswordPress}
// 					onNewPasswordButtonClick={onCancelNewPasswordPress}
// 				/>

// 				<CancelContract
// 					visible={showCancelContract}
// 					headerText={t('vertrag kundigen')}
// 					descriptionText={t('sh_apoc_number-portability_subheader2')}
// 					onCancelPress={onCancelContractPress}

// 				/>

// 				<Hud showHud={isLoading} />
// 			</View>
// 		</ScrollView>



// 	);
// };


// export default Calender;