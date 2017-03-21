// src/mui/field/EnumField.js

import React, { PropTypes } from 'react';
import pure from 'recompose/pure';
import { translate as Translate } from 'admin-on-rest';
import Chip from 'material-ui/Chip';
import inflection from 'inflection';

/**
 * @example
 * <EnumField source="gender" />
 * in i18n messages you need to add
 * en: {resources: { people: { enums: { gender: { m: 'Male', f: 'Female' } } } } }
 */

const EnumField = ({ record, source, resource, elStyle = { margin: 4 }, translate }) => {
  const text = translate(
      `resources.${resource}.enums.${source}.${record[source]}`,
      { _: inflection.humanize(record[source]) },
  );

  return <Chip style={elStyle} >{text}</Chip>;
};

EnumField.propTypes = {
  addLabel: PropTypes.bool,
  elStyle: PropTypes.object,
  label: PropTypes.string,
  resource: PropTypes.string.isRequired,
  record: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
};

const PureEnumField = pure(EnumField);

PureEnumField.defaultProps = {
  addLabel: true,
};

export default Translate(PureEnumField);
