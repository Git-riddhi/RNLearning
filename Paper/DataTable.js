import * as React from 'react';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const MyComponent = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title >Sr No.</DataTable.Title>
        <DataTable.Title >Name</DataTable.Title>
        <DataTable.Title numeric>Chemistry</DataTable.Title>
        <DataTable.Title numeric>English</DataTable.Title>
        <DataTable.Title numeric>Maths</DataTable.Title>
        <DataTable.Title numeric>Physics</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell >1</DataTable.Cell>
        <DataTable.Cell>Riddhi</DataTable.Cell>
        <DataTable.Cell numeric>92</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
        <DataTable.Cell numeric>95</DataTable.Cell>
        <DataTable.Cell numeric>85</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell >2</DataTable.Cell>
        <DataTable.Cell>Janvi</DataTable.Cell>
        <DataTable.Cell numeric>92</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
        <DataTable.Cell numeric>95</DataTable.Cell>
        <DataTable.Cell numeric>85</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell >3</DataTable.Cell>
        <DataTable.Cell>Neha</DataTable.Cell>
        <DataTable.Cell numeric>92</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
        <DataTable.Cell numeric>95</DataTable.Cell>
        <DataTable.Cell numeric>85</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell >4</DataTable.Cell>
        <DataTable.Cell>Krishna</DataTable.Cell>
        <DataTable.Cell numeric>92</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
        <DataTable.Cell numeric>95</DataTable.Cell>
        <DataTable.Cell numeric>85</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell >5</DataTable.Cell>
        <DataTable.Cell>Drashti</DataTable.Cell>
        <DataTable.Cell numeric>92</DataTable.Cell>
        <DataTable.Cell numeric>90</DataTable.Cell>
        <DataTable.Cell numeric>95</DataTable.Cell>
        <DataTable.Cell numeric>85</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
  );
}

export default MyComponent;
