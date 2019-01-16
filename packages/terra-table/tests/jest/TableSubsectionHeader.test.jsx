import React from 'react';
import TableSubsectionHeader from '../../src/TableSubsectionHeader';

// Snapshot test
it('should render a default table section header', () => {
  const section = shallow(
    <TableSubsectionHeader colSpan={1} />,
  );
  expect(section).toMatchSnapshot();
});


it('should render a table section header with isCollpased', () => {
  const section = shallow(
    <TableSubsectionHeader colSpan={1} isCollapsed />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section header with isCollapsible', () => {
  const section = shallow(
    <TableSubsectionHeader colSpan={1} isCollapsible />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section header with level', () => {
  const section = shallow(
    <TableSubsectionHeader colSpan={1} level={4} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section header with metaData', () => {
  const section = shallow(
    <TableSubsectionHeader colSpan={1} metaData={{}} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section header with onSelect', () => {
  const section = shallow(
    <TableSubsectionHeader colSpan={1} onSelect={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section header with refCallback', () => {
  const section = shallow(
    <TableSubsectionHeader colSpan={1} onSelect={jest.fn()} />,
  );
  expect(section).toMatchSnapshot();
});

it('should render a table section header with title', () => {
  const section = shallow(
    <TableSubsectionHeader colSpan={1} title="test" />,
  );
  expect(section).toMatchSnapshot();
});