@@ .. @@
 import React, { useState, useMemo } from 'react';
 import { ShoppingBag, Plus, Edit3 } from 'lucide-react';
-import { Product, FilterState, AuthState, Pharmacy } from './types';
+import { Product, FilterState, AuthState, Pharmacy } from './types';
 import { mockProducts } from './data/mockData';
 import { searchMatch } from './utils/searchUtils';
 import SearchBar from './components/SearchBar';