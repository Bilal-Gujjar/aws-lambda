import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway'


export class AwsLambda1Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const hello = new lambda.Function(this, "HellolambdaHandler", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler",
    });
    const api = new apigateway.LambdaRestApi(this, "MylambdaAPI", {
      handler: hello,
      proxy : false
    });
    const api1 = new apigateway.LambdaRestApi(this, "MylambdaAPI1", {
      handler: hello,
      proxy : false
    });

    const items = api.root.addResource('cars');
    const items_2= api.root.addResource('collectAPI');
    items.addMethod('Get');
    items_2.addMethod('GET');

    const items1 = api1.root.addResource('testcar1');
    items1.addMethod('Get');
  }
}
