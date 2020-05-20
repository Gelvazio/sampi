import { StyleSheet } from 'react-native';

import { general, colors } from '../../../styles';

export default styles = StyleSheet.create({
  container: general.container,

  titleContainer: general.screenTitleContainer,

  title: general.screenTitle,

  nPlayerPickerContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pickerText: {
    color: colors.darkGray,
    textAlign: 'center',
    fontSize: 15,
  },

  nPlayerPicker: {
    width: 100,
    left: 20
  },

  teamFormationMode: {
    flex: 5,
    flexDirection: 'row',
  },

  teamFormationModeButton: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  teamFormationModeTextContainer: {
    flex: 1,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonsBlue,
  },

  teamFormationModeTextContainerActive: {
    flex: 1,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: colors.selectedGreen
  },

  teamFormationModeHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 19,
    color: colors.mainBlue
  },

  teamFormationModeText: {
    flex: 4,
    color: colors.darkGray,
    textAlign: 'center',
    marginTop: 12,
  },

  helpTextContainer: {
    marginTop: 15,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  comingSoonText: {
    fontSize: 15,
    color: colors.logoutRed,
    textAlign: 'center',
    marginTop: 5,
  },

  helpTextHeader: {
    color: colors.black,
    fontSize: 22,
    textAlign: 'center',
  },

  helpText: {
    color: colors.midGray,
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
  },

  progressStatusContainer: {
    flex: .8,
    alignItems: 'center',
  },

  progressStatus: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 70,
  },

  nextStepButton: {
    ...general.fullWidthButton,
    flex: 2,
  },

  nextStepButtonText: general.fullWidthButtonText
});
