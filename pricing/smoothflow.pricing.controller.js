angular
    .module('sfPricing', [])
    .controller('sfPricingController', ['$scope', function ($scope) {
        $scope.activeFeatures = [];
        var tempSelectedPlanTrans = 0;
        var tempSelectedPlanDisk = 0;
        $scope.sfPackages = [
            {
                name : "Free Plan",
                price : 0.00,
                billCycle : null,
                features : [
                    {
                        cat : 'Chatbots',
                        features : [{
                            name : '500 Audiences included',
                            active : true
                        },{
                            name : '1 ChatBots included',
                            active : true
                        },{
                            name : 'Smoothflow Branding for Chatbots welcome message',
                            active : true
                        },{
                            name : 'Unlimited Paid ChatBots',
                            active : false
                        },{
                            name : 'Unlimited Paid Audience',
                            active : false
                        },{
                            name : 'Possible to delete audience',
                            active : false
                        }]
                    }, {
                        cat : 'Artificial Intelligence',
                        features : [{
                            name : 'Artificial Intelligence powered by Google Cloud AI inbuilt',
                            active : true
                        },{
                            name : 'Connect to Dialogflow or Google NLP',
                            active : false
                        }]
                    }, {
                        cat : 'Automations',
                        features : [{
                            name : '3 Basic Automations included',
                            active : true
                        },{
                            name : 'Unlimited Advanced automations',
                            active : false
                        },{
                            name : 'Shared hosting environment',
                            active : false
                        },{
                            name : 'Automation can be hosted on external servers',
                            active : false
                        },{
                            name : '3rd Party Integrations',
                            active : false
                        }]
                    }, {
                        cat : 'Technical Support',
                        features : [{
                            name : 'Online Tickets',
                            active : true
                        },{
                            name : 'Chat Support',
                            active : false
                        },{
                            name : 'Voice & Email Support',
                            active : false
                        }]
                    }, {
                        cat : 'Professional Support',
                        features : [{
                            name : 'Provide support to build automations',
                            active : false
                        },{
                            name : 'Support to Configure you Chatbot',
                            active : false
                        },{
                            name : 'Support to build automations',
                            active : false
                        },{
                            name : 'Custom build automations for you',
                            active : false
                        },{
                            name : 'Custom revisions to existing built automations',
                            active : false
                        },{
                            name : 'Custom 3rd party integrations',
                            active : false
                        },{
                            name : 'Training Administrators',
                            active : false
                        },{
                            name : 'Training to Automation team members',
                            active : false
                        }]
                    }],
                AHCP : '',
                DT : 0,
                BS : 0,
                active : true
            },{
                name : "Self manage Plan",
                price : 24.99,
                billCycle : "Billed Monthly",
                features : [
                    {
                        cat : 'Chatbots',
                        features : [{
                            name : '1000 Audiences included',
                            active : true
                        },{
                            name : 'Unlimited Paid Audience',
                            active : true
                        },{
                            name : 'Possible to delete audience',
                            active : true
                        },{
                            name : '2 ChatBots included',
                            active : true
                        },{
                            name : 'Unlimited Paid ChatBots',
                            active : true
                        },{
                            name : 'No Branding',
                            active : true
                        }]
                    }, {
                        cat : 'Artificial Intelligence',
                        features : [{
                            name : 'Artificial Intelligence powered by Google Cloud AI inbuilt',
                            active : true
                        },{
                            name : 'Connect to Dialogflow or Google NLP',
                            active : true
                        }]
                    }, {
                        cat : 'Automations',
                        features : [{
                            name : 'Unlimited Automations included',
                            active : true
                        },{
                            name : 'Unlimited Advanced automations',
                            active : true
                        },{
                            name : 'H1 (1 VCore, 0.5GB Memory, 20GB SSD Storage, 1 TB Data Transfer)',
                            active : true
                        },{
                            name : 'Automation can be hosted on external servers',
                            active : true
                        },{
                            name : '3rd Party Integrations',
                            active : true
                        }]
                    }, {
                        cat : 'Technical Support',
                        features : [{
                            name : 'Online Tickets response 24×365',
                            active : true
                        },{
                            name : 'Chat Support',
                            active : true
                        },{
                            name : 'Voice & Email Support',
                            active : true
                        }]
                    }, {
                        cat : 'Professional Support',
                        features : [{
                            name : 'Provide support to build automations',
                            active : false
                        },{
                            name : 'Support to Configure you Chatbot',
                            active : false
                        },{
                            name : 'Support to build automations',
                            active : false
                        },{
                            name : 'Custom build automations for you',
                            active : false
                        },{
                            name : 'Custom revisions to existing built automations',
                            active : false
                        },{
                            name : 'Custom 3rd party integrations',
                            active : false
                        },{
                            name : 'Training Administrators',
                            active : false
                        },{
                            name : 'Training to Automation team members',
                            active : false
                        }]
                    }],
                AHCP : '1 VCore, 0.5GB Memory, 20GB SSD Storage, 1TB Data Transfer',
                DT : 1,
                BS : 20,
                active : false
            },{
                name : "Kick Starter Plan",
                price : 149.00,
                billCycle : "Billed monthly (Annual contract)",
                features : [
                    {
                        cat : 'Chatbots',
                        features : [{
                            name : '1000 Audiences included',
                            active : true
                        },{
                            name : 'Unlimited Paid Audience',
                            active : true
                        },{
                            name : 'Possible to delete audience',
                            active : true
                        },{
                            name : '2 ChatBots included',
                            active : true
                        },{
                            name : 'Unlimited Paid ChatBots',
                            active : true
                        },{
                            name : 'No Branding',
                            active : true
                        }]
                    }, {
                        cat : 'Artificial Intelligence',
                        features : [{
                            name : 'Artificial Intelligence powered by Google Cloud AI inbuilt',
                            active : true
                        },{
                            name : 'Connect to Dialogflow or Google NLP',
                            active : true
                        }]
                    }, {
                        cat : 'Automations',
                        features : [{
                            name : 'Unlimited Automations included',
                            active : true
                        },{
                            name : 'Unlimited Advanced automations',
                            active : true
                        },{
                            name : 'H1 (1 VCore, 0.5GB Memory, 20GB SSD Storage, 1 TB Data Transfer)',
                            active : true
                        },{
                            name : 'Automation can be hosted on external servers',
                            active : true
                        },{
                            name : '3rd Party Integrations',
                            active : true
                        }]
                    }, {
                        cat : 'Technical Support',
                        features : [{
                            name : 'Online Tickets response 24×365',
                            active : true
                        },{
                            name : 'Chat Support',
                            active : true
                        },{
                            name : 'Voice & Email Support available 24×365',
                            active : true
                        }]
                    }, {
                        cat : 'Professional Support',
                        features : [{
                            name : 'Provide support to build automations (Standard business hours)',
                            active : true
                        },{
                            name : 'We will help you configure',
                            active : true
                        },{
                            name : 'We will help you build automations',
                            active : true
                        },{
                            name : '2 custom built integration',
                            active : true
                        },{
                            name : 'One named administrator',
                            active : true
                        },{
                            name : 'Custom build automations for you',
                            active : false
                        },{
                            name : 'Custom revisions to existing built automations',
                            active : false
                        },{
                            name : 'Training to Automation team members',
                            active : false
                        }]
                    }],
                AHCP : '1 VCore, 0.5GB Memory, 20GB SSD Storage, 1TB Data Transfer',
                DT : 1,
                BS : 20,
                active : false
            },{
                name : "Fully Managed Plan",
                price : 299.00,
                billCycle : "Billed monthly (Annual contract)",
                features : [
                    {
                        cat : 'Chatbots',
                        features : [{
                            name : '1000 Audiences included',
                            active : true
                        },{
                            name : 'Unlimited Paid Audience',
                            active : true
                        },{
                            name : 'Possible to delete audience',
                            active : true
                        },{
                            name : '2 ChatBots included',
                            active : true
                        },{
                            name : 'Unlimited Paid ChatBots',
                            active : true
                        },{
                            name : 'No Branding',
                            active : true
                        }]
                    }, {
                        cat : 'Artificial Intelligence',
                        features : [{
                            name : 'Artificial Intelligence powered by Google Cloud AI inbuilt',
                            active : true
                        },{
                            name : 'Connect to Dialogflow or Google NLP',
                            active : true
                        }]
                    }, {
                        cat : 'Automations',
                        features : [{
                            name : 'Unlimited Automations included',
                            active : true
                        },{
                            name : 'Unlimited Advanced automations',
                            active : true
                        },{
                            name : 'H1 (1 VCore, 0.5GB Memory, 20GB SSD Storage, 1 TB Data Transfer)',
                            active : true
                        },{
                            name : 'Automation can be hosted on external servers',
                            active : true
                        },{
                            name : '3rd Party Integrations',
                            active : true
                        }]
                    }, {
                        cat : 'Technical Support',
                        features : [{
                            name : 'Online Tickets response 24×365',
                            active : true
                        },{
                            name : 'Chat Support',
                            active : true
                        },{
                            name : 'Voice & Email Support available 24×365',
                            active : true
                        }]
                    }, {
                        cat : 'Professional Support',
                        features : [{
                            name : 'Provide support to build automations (Standard business hours)',
                            active : true
                        },{
                            name : 'We will configure it for you',
                            active : true
                        },{
                            name : 'We will build it for you or we can help you build',
                            active : true
                        },{
                            name : 'Up to 10 Automations in a given year (total of 50 conversational steps)\n',
                            active : true
                        },{
                            name : '36 revisions per year',
                            active : true
                        },{
                            name : '10 custom built integration',
                            active : true
                        },{
                            name : 'Up to 3 named administrators',
                            active : true
                        },{
                            name : 'Up to 5 team members',
                            active : true
                        }]
                    }],
                AHCP : '1 VCore, 0.5GB Memory, 20GB SSD Storage, 1TB Data Transfer',
                DT : 1,
                BS : 20,
                active : false
            }
        ];
        $scope.sfAutomationComPlans = [
            {
                id : 'complan1',
                mem : '512 MB Memory',
                pros : '1 Core Processor',
                disk : 20,
                trans : 1,
                price : 14.99,
                qty : 1
            },{
                id : 'complan2',
                mem : '1 GB Memory',
                pros : '1 Core Processor',
                disk : 30,
                trans : 2,
                price : 19.99,
                qty : 1
            },{
                id : 'complan3',
                mem : '2 GB Memory',
                pros : '1 Core Processor',
                disk : 40,
                trans : 3,
                price : 29.99,
                qty : 1
            },{
                id : 'complan4',
                mem : '4 GB Memory',
                pros : '2 Core Processor',
                disk : 60,
                trans : 4,
                price : 79.99,
                qty : 1
            },{
                id : 'complan5',
                mem : '8 GB Memory',
                pros : '2 Core Processor',
                disk : 80,
                trans : 5,
                price : 199.99,
                qty : 1
            }
        ];
        $scope.activeFeatures = $scope.sfPackages[0].features;
        $scope.selectedComPlan = {};

        // $scope.features_free = [
        // {
        //     cat : 'Chatbots',
        //     features : [{
        //         name : '500 Audiences Included',
        //         active : true
        //     },{
        //         name : 'Unlimited Paid Audience',
        //         active : false
        //     },{
        //         name : 'Possible to delete audience',
        //         active : false
        //     },{
        //         name : '1 ChatBots included',
        //         active : true
        //     },{
        //         name : 'Unlimited Paid ChatBots',
        //         active : false
        //     },{
        //         name : 'Smoothflow Branding for Chatbots welcome message',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Artificial Intelligence',
        //     features : [{
        //         name : 'Artificial Intelligence powered by Google Cloud AI inbuilt',
        //         active : true
        //     },{
        //         name : 'Connect to Dialogflow or Google NLP',
        //         active : false
        //     }]
        // }, {
        //     cat : 'Automations',
        //     features : [{
        //         name : '3 Basic Automations included',
        //         active : true
        //     },{
        //         name : 'Unlimited Advanced automations',
        //         active : false
        //     },{
        //         name : 'Shared hosting environment',
        //         active : false
        //     },{
        //         name : 'Automation can be hosted on external servers',
        //         active : false
        //     },{
        //         name : '3rd Party Integrations',
        //         active : false
        //     }]
        // }, {
        //     cat : 'Technical Support',
        //     features : [{
        //         name : 'Online Tickets',
        //         active : true
        //     },{
        //         name : 'Chat Support',
        //         active : false
        //     },{
        //         name : 'Voice & Email Support',
        //         active : false
        //     }]
        // }, {
        //     cat : 'Professional Support',
        //     features : [{
        //         name : 'Provide support to build automations',
        //         active : false
        //     },{
        //         name : 'Support to Configure you Chatbot',
        //         active : false
        //     },{
        //         name : 'Support to build automations',
        //         active : false
        //     },{
        //         name : 'Custom build automations for you',
        //         active : false
        //     },{
        //         name : 'Custom revisions to existing built automations',
        //         active : false
        //     },{
        //         name : 'Custom 3rd party integrations',
        //         active : false
        //     },{
        //         name : 'Training Administrators',
        //         active : false
        //     },{
        //         name : 'Training to Automation team members',
        //         active : false
        //     }]
        // }];
        // $scope.features_self_manage = [
        // {
        //     cat : 'Chatbots',
        //     features : [{
        //         name : '1000 Audiences Included',
        //         active : true
        //     },{
        //         name : 'Unlimited Paid Audience',
        //         active : true
        //     },{
        //         name : 'Possible to delete audience',
        //         active : true
        //     },{
        //         name : '2 ChatBots included',
        //         active : true
        //     },{
        //         name : 'Unlimited Paid ChatBots',
        //         active : true
        //     },{
        //         name : 'No Branding',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Artificial Intelligence',
        //     features : [{
        //         name : 'Artificial Intelligence powered by Google Cloud AI inbuilt',
        //         active : true
        //     },{
        //         name : 'Connect to Dialogflow or Google NLP',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Automations',
        //     features : [{
        //         name : 'Unlimited Automations included',
        //         active : true
        //     },{
        //         name : 'Unlimited Advanced automations',
        //         active : true
        //     },{
        //         name : 'H1 (1 VCore, 0.5GB Memory, 20GB SSD Storage, 1 TB Data Transfer)',
        //         active : true
        //     },{
        //         name : 'Automation can be hosted on external servers',
        //         active : true
        //     },{
        //         name : '3rd Party Integrations',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Technical Support',
        //     features : [{
        //         name : 'Online Tickets response 24×365',
        //         active : true
        //     },{
        //         name : 'Chat Support',
        //         active : true
        //     },{
        //         name : 'Voice & Email Support',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Professional Support',
        //     features : [{
        //         name : 'Provide support to build automations',
        //         active : false
        //     },{
        //         name : 'Support to Configure you Chatbot',
        //         active : false
        //     },{
        //         name : 'Support to build automations',
        //         active : false
        //     },{
        //         name : 'Custom build automations for you',
        //         active : false
        //     },{
        //         name : 'Custom revisions to existing built automations',
        //         active : false
        //     },{
        //         name : 'Custom 3rd party integrations',
        //         active : false
        //     },{
        //         name : 'Training Administrators',
        //         active : false
        //     },{
        //         name : 'Training to Automation team members',
        //         active : false
        //     }]
        // }];
        // $scope.features_kick_starter = [
        // {
        //     cat : 'Chatbots',
        //     features : [{
        //         name : '1000 Audiences Included',
        //         active : true
        //     },{
        //         name : 'Unlimited Paid Audience',
        //         active : true
        //     },{
        //         name : 'Possible to delete audience',
        //         active : true
        //     },{
        //         name : '2 ChatBots included',
        //         active : true
        //     },{
        //         name : 'Unlimited Paid ChatBots',
        //         active : true
        //     },{
        //         name : 'No Branding',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Artificial Intelligence',
        //     features : [{
        //         name : 'Artificial Intelligence powered by Google Cloud AI inbuilt',
        //         active : true
        //     },{
        //         name : 'Connect to Dialogflow or Google NLP',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Automations',
        //     features : [{
        //         name : 'Unlimited Automations included',
        //         active : true
        //     },{
        //         name : 'Unlimited Advanced automations',
        //         active : true
        //     },{
        //         name : 'H1 (1 VCore, 0.5GB Memory, 20GB SSD Storage, 1 TB Data Transfer)',
        //         active : true
        //     },{
        //         name : 'Automation can be hosted on external servers',
        //         active : true
        //     },{
        //         name : '3rd Party Integrations',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Technical Support',
        //     features : [{
        //         name : 'Online Tickets response 24×365',
        //         active : true
        //     },{
        //         name : 'Chat Support',
        //         active : true
        //     },{
        //         name : 'Voice & Email Support available 24×365',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Professional Support',
        //     features : [{
        //         name : 'Provide support to build automations (Standard business hours)',
        //         active : true
        //     },{
        //         name : 'We will help you configure',
        //         active : true
        //     },{
        //         name : 'We will help you build automations',
        //         active : true
        //     },{
        //         name : 'Custom build automations for you',
        //         active : false
        //     },{
        //         name : 'Custom revisions to existing built automations',
        //         active : false
        //     },{
        //         name : '2 custom built integration',
        //         active : true
        //     },{
        //         name : 'One named administrator',
        //         active : true
        //     },{
        //         name : 'Training to Automation team members',
        //         active : false
        //     }]
        // }];
        // $scope.features_fully_managed = [
        // {
        //     cat : 'Chatbots',
        //     features : [{
        //         name : '1000 Audiences Included',
        //         active : true
        //     },{
        //         name : 'Unlimited Paid Audience',
        //         active : true
        //     },{
        //         name : 'Possible to delete audience',
        //         active : true
        //     },{
        //         name : '2 ChatBots included',
        //         active : true
        //     },{
        //         name : 'Unlimited Paid ChatBots',
        //         active : true
        //     },{
        //         name : 'No Branding',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Artificial Intelligence',
        //     features : [{
        //         name : 'Artificial Intelligence powered by Google Cloud AI inbuilt',
        //         active : true
        //     },{
        //         name : 'Connect to Dialogflow or Google NLP',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Automations',
        //     features : [{
        //         name : 'Unlimited Automations included',
        //         active : true
        //     },{
        //         name : 'Unlimited Advanced automations',
        //         active : true
        //     },{
        //         name : 'H1 (1 VCore, 0.5GB Memory, 20GB SSD Storage, 1 TB Data Transfer)',
        //         active : true
        //     },{
        //         name : 'Automation can be hosted on external servers',
        //         active : true
        //     },{
        //         name : '3rd Party Integrations',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Technical Support',
        //     features : [{
        //         name : 'Online Tickets response 24×365',
        //         active : true
        //     },{
        //         name : 'Chat Support',
        //         active : true
        //     },{
        //         name : 'Voice & Email Support available 24×365',
        //         active : true
        //     }]
        // }, {
        //     cat : 'Professional Support',
        //     features : [{
        //         name : 'Provide support to build automations (Standard business hours)',
        //         active : true
        //     },{
        //         name : 'We will configure it for you',
        //         active : true
        //     },{
        //         name : 'We will build it for you or we can help you build',
        //         active : true
        //     },{
        //         name : 'Up to 10 Automations in a given year (total of 50 conversational steps)\n',
        //         active : true
        //     },{
        //         name : '36 revisions per year',
        //         active : true
        //     },{
        //         name : '10 custom built integration',
        //         active : true
        //     },{
        //         name : 'Up to 3 named administrators',
        //         active : true
        //     },{
        //         name : 'Up to 5 team members',
        //         active : true
        //     }]
        // }];

        $scope.sfPricingEstimation = {
            selectedPlan : {
                name : $scope.sfPackages[0].name,
                price : $scope.sfPackages[0].price
            },
            additionalChatbots : {
                qty : 0,
                price : 0
            },
            additionalAudience : {
                qty : 0,
                price : 0
            },
            additionalAutomationPlanPrice : 0,
            additionalDataTransfer : {
                vol : 0,
                price : 0
            },
            staticIp : {
                days : 0,
                price : 0
            },
            additionalBlockStorage : {
                vol : 0,
                price : 0
            },
            total : 0
        };

        // Methods
        $scope.$watch(function () {
            $scope.sfPricingEstimation.total =
                $scope.sfPricingEstimation.selectedPlan.price +
                $scope.sfPricingEstimation.additionalChatbots.price +
                $scope.sfPricingEstimation.additionalAudience.price +
                $scope.sfPricingEstimation.additionalAutomationPlanPrice +
                $scope.sfPricingEstimation.additionalDataTransfer.price +
                $scope.sfPricingEstimation.staticIp.price +
                $scope.sfPricingEstimation.additionalBlockStorage.price;
        });
        $scope.updatePackage = function (pack) {
            $scope.sfPricingEstimation.selectedPlan = pack;
            tempSelectedPlanTrans = pack.DT;
            tempSelectedPlanDisk = pack.BS;
            $scope.selectedComPlan = {};
            $.each($scope.sfPackages, function (i, p) {
                p.active = false;
                if (p.name === pack.name) {
                    $scope.activeFeatures = [];
                    $scope.activeFeatures = p.features;
                    p.active = true;
                }
            });
        };
        $scope.calculateQtyVlaue = function (qty, val) {
            return (qty*val);
        };
        $scope.updateAutomationComPlan = function (complan, e) {
            var elem = e.toElement;
            if (!$(elem).hasClass('aahdQty')) {
                if (complan.id == $scope.selectedComPlan.id) {
                    $scope.selectedComPlan = {};
                    $scope.sfPricingEstimation.additionalAutomationPlanPrice = 0;
                    $scope.sfPricingEstimation.selectedPlan.DT = tempSelectedPlanTrans;
                    $scope.sfPricingEstimation.selectedPlan.BS = tempSelectedPlanDisk;
                    return;
                }
                $scope.selectedComPlan = complan;
                $scope.sfPricingEstimation.additionalAutomationPlanPrice = complan.price;
                $scope.updateAAHCP(1);
            };
        };
        $scope.updateAdditionalAudience = function (qty) {
            if(qty === 0) {
                return 0;
            }else if(qty <= 4999) {
                return 80
            }else if(qty > 4999 && qty <= 9999) {
                return 80
            }else if(qty >= 10000) {
                return (qty/1000 * 15)
            }
        };
        $scope.updateAAHCP = function (qty) {
            $scope.sfPricingEstimation.additionalAutomationPlanPrice = $scope.calculateQtyVlaue(qty, $scope.selectedComPlan.price);
            $scope.sfPricingEstimation.selectedPlan.DT = tempSelectedPlanTrans + $scope.calculateQtyVlaue(qty, $scope.selectedComPlan.trans);
            $scope.sfPricingEstimation.selectedPlan.BS = tempSelectedPlanDisk + $scope.calculateQtyVlaue(qty, $scope.selectedComPlan.disk);
        };
    }]);