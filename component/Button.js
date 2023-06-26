import PropTypes from 'prop-types';
import React from 'react';
import {Text} from 'react-native';
import {Button as PaperButton, withTheme} from 'react-native-paper';
import styles from './styles';

const Button = ({
  mode,
  theme,
  fontWeight,
  titleStyle,
  whiteButton,
  buttonStyle,
  greyButton,
  blackButton,
  disabled,
  ...rest
}) => {

  const buttonStyles = whiteButton ? styles.defaultWhiteButtonStyle : greyButton ? styles.defaultGreyButtonStyle : blackButton ? styles.defaultBlackButtonStyle : styles.defaultButtonStyle
  const textStyles = whiteButton ? styles.defaultBlackTitleStyle : styles.defaultTitleStyle
  const disableButtonStyle = styles.disableButtonStyle
  return (
    <PaperButton
      uppercase={false}
      disabled={disabled}
      labelStyle={[
        textStyles,
        titleStyle,
        theme.fonts[fontWeight],
      ]}
      style={[disabled ? disableButtonStyle : buttonStyles, buttonStyle]}
      mode={mode}
      {...rest}
    />
  );
};



export default withTheme(Button);