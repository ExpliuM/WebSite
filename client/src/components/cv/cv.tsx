import { Box, BoxProps, TypographyProps } from '@mui/material';
import { useState } from 'react';

import ArrowedHeader, {
  ArrowedHeaderEventHandler,
  Options,
} from '../arrowed-header/arrowed-header';
import { IconBoxProps } from '../icon-box/icon-box';
import cv from './data/cv-data';
import Education, {
  EducationComponent,
  EducationProps,
} from './education/education';
import EducationHeaderButton from './header/education-header-button';
import Experience, {
  ExperienceComponent,
  ExperienceProps,
} from './experience/experience';
import ExperienceHeaderButton from './header/experience-header-button';
import GeneralInformation from './general-information/general-information';
import Misc, { MiscComponent, MiscProps } from './misc/misc';
import MiscHeaderButton from './header/misc-header-button';
import Skills from './skills/skills';
import Title from './title';

const { educations, experiences, generalInformation, misc, name, skills } = cv;

// TODO: find better type solution for this props
const headerButtonProps: {
  iconBoxProps: IconBoxProps;
  typographyProps: TypographyProps;
} = {
  iconBoxProps: {
    alignItems: 'center',
    display: 'flex',
    gap: '0.5rem',
    justifyContent: 'center',
    width: '100%',
    iconProps: { size: '1.5rem' },
  },
  typographyProps: { variant: 'h6' },
};

const headerData: Array<Options> = [
  {
    Component: ExperienceHeaderButton,
    componentProps: headerButtonProps,
  },
  {
    Component: EducationHeaderButton,
    componentProps: headerButtonProps,
  },
  {
    Component: MiscHeaderButton,
    componentProps: headerButtonProps,
  },
];

const experienceProps: ExperienceProps = {
  experiences,
  height: '45vh',
  width: '100%',
};

const educationProps: EducationProps = {
  educations,
  height: '45vh',
  width: '100%',
};

const miscProps: MiscProps = { height: '45vh', misc, width: '100%' };

type ExperienceComponentData = {
  name: string;
  Component: ExperienceComponent;
  componentProps: ExperienceProps;
};

type EducationComponentData = {
  name: string;
  Component: EducationComponent;
  componentProps: EducationProps;
};

type MiscComponentData = {
  name: string;
  Component: MiscComponent;
  componentProps: MiscProps;
};

type SelectableComponentData =
  | ExperienceComponentData
  | EducationComponentData
  | MiscComponentData;

type SelectableComponentsData = SelectableComponentData[];

const educationComponentData: EducationComponentData = {
  name: 'Education',
  Component: Education,
  componentProps: educationProps,
};

const experienceComponentData: ExperienceComponentData = {
  name: 'Experience',
  Component: Experience,
  componentProps: experienceProps,
};

const miscComponentData: MiscComponentData = {
  name: 'Misc',
  Component: Misc,
  componentProps: miscProps,
};

const selectableComponentsData: SelectableComponentsData = [
  educationComponentData,
  experienceComponentData,
  miscComponentData,
];

const CV = (props: BoxProps) => {
  const [selected, setSelected] = useState<number>(0);

  const handleArrowedHeaderClicked: ArrowedHeaderEventHandler = (selected) => {
    setSelected(selected);
  };

  const selectedComponentData = selectableComponentsData[selected];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SelectedComponent = selectedComponentData.Component as (
    ...args: any[]
  ) => React.JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectedProps = selectedComponentData.componentProps as any;

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      gap="0.75rem"
      {...props}
    >
      <Title paddingTop="1rem">{name}</Title>
      <GeneralInformation
        display="flex"
        flexDirection="column"
        gap="0.25rem"
        generalInformation={generalInformation}
      />
      <Skills
        display="flex"
        flexDirection="column"
        gap="0.25rem"
        skills={skills}
      />
      <Box
        borderRadius="1rem"
        sx={{ backgroundColor: 'primary.main' }}
        width="90%"
      >
        <ArrowedHeader
          alignItems="center"
          dataArray={headerData}
          display="flex"
          flexDirection="row"
          iconProps={{ size: '2rem' }}
          onClick={handleArrowedHeaderClicked}
          paddingBottom="0.5rem"
          paddingTop="0.5rem"
          value={selected}
          width="100%"
        />
        {selectedComponentData && <SelectedComponent {...selectedProps} />}
      </Box>
    </Box>
  );
};

export default CV;
