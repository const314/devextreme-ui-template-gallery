import React from 'react';

import TextBox from 'devextreme-react/text-box';

import { ItemField } from '../components';

export const editFieldRender = (data?: string) => (
  <div className='item-editor-field'>
    <TextBox
      className={data && `item-field item-${data.toLowerCase().replace('| ', '').replace(' ', '-')}`}
      inputAttr={{ class: 'item-editor-input' }}
      readOnly
      text={data}
      hoverStateEnabled={false}
    />
  </div>
);

export const priorityItemRender = (data: string) => <ItemField text={`| ${data}`} />;
export const statusItemRender = (data: string) => <ItemField text={data} />;

export const priorityFieldRender = (data?: string) => editFieldRender(data ? `| ${data}` : data);
