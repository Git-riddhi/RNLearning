import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';

const API_URL = 'https://randomuser.me/api/?results=5000';
const RESULTS_PER_PAGE = 20; // Number of results to load per page

const FlatlistWithLoader = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL + `&page=${page}`);
      const newData = response.data.results;
      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
      setHasMoreData(newData.length === RESULTS_PER_PAGE);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!isLoading && hasMoreData) {
      setPage((prevPage) => prevPage + 1);
      fetchData();
    }
  };

  const renderItem = ({ item }) => {
    // Render your user data here
    return (
      // Your UI for each user item goes here
      // For example:
      <View>
        <Text>{item.name.first} {item.name.last}</Text>
        {/* Other user details */}
      </View>
    );
  };

  const renderFooter = () => {
    return isLoading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : null;
  };

  const handleRefresh = () => {
    if (!isLoading) {
      setPage(1);
      setIsRefreshing(true);
      fetchData();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.login.uuid}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        onRefresh={handleRefresh}
        refreshing={isRefreshing}
      />
    </View>
  );
};

export default FlatlistWithLoader;
