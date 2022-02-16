/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react';
import {withPrefix} from 'gatsby';

export const onRenderBody = ({setHeadComponents}) => {
  setHeadComponents([
    <script src={withPrefix('/gtag.js')}></script>,

    process.env.GATSBY_ADOBE_ANALYTICS_ENV && (
      <script type="text/javascript">{`
        window.marketingtech = {
          'adobe': {
            'launch': {
              'property': 'global',
              'environment': '${process.env.GATSBY_ADOBE_ANALYTICS_ENV}',
              'controlPageLoad': true
            },
            'analytics': {
              'additionalAccounts': '${process.env.GATSBY_ADDITIONAL_ADOBE_ANALYTICS_ACCOUNTS}'
            }
          }
        };
      `}</script>
    ),

    process.env.GATSBY_ADOBE_ANALYTICS_ENV && (
      <script async src="https://www.adobe.com/marketingtech/main.min.js"></script>
    )
  ]);
};