import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemInfo from './ItemInfo';


const ItemForm = () => {

    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Item Info</Tab>
                    <Tab>Item Price</Tab>
                    <Tab>Item Stock</Tab>
                </TabList>

                <TabPanel>
                    <ItemInfo />
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </>
    );
};

export default ItemForm;