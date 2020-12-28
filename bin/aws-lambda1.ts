#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsLambda1Stack } from '../lib/aws-lambda1-stack';

const app = new cdk.App();
new AwsLambda1Stack(app, 'AwsLambda1Stack');
