import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemInfo from './ItemInfo';
import ItemPrice from './ItemPrice';


const ItemForm = () => {

    return (
        <div className='container mx-auto'>
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
                    <ItemPrice />
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ItemForm;