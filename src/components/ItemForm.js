import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ItemInfo from './ItemInfo';
import ItemPrice from './ItemPrice';
import ItemStock from './ItemStock';


const ItemForm = () => {

    return (
        <div className='container mx-auto  bg-white h-screen'>
            <Tabs>
                <TabList className='flex border-none bg-gray-100'>
                    <Tab className='p-3 font-bold'>Item Info</Tab>
                    <Tab className='p-3 font-bold'>Item Price</Tab>
                    <Tab className='p-3 font-bold'>Item Stock</Tab>
                </TabList>

                <TabPanel>
                    <ItemInfo />
                </TabPanel>
                <TabPanel>
                    <ItemPrice />
                </TabPanel>
                <TabPanel>
                    <ItemStock />
                </TabPanel>
            </Tabs>

        </div >
    );
};

export default ItemForm;