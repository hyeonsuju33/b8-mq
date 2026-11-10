import { test } from 'node:test';
import assert from 'node:assert/strict';
import { f1 } from '../src/m1.js';
test('f1', () => assert.equal(f1(2, 3), 5));
