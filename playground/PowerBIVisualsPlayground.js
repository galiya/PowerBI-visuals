/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
///<reference path="../../Typedefs/jquery/jquery.d.ts"/>
///<reference path="../../Typedefs/d3/d3.d.ts"/>
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
///<reference path="../../VisualsCommon/obj/VisualsCommon.d.ts"/>
///<reference path="../../VisualsData/obj/VisualsData.d.ts"/>
///<reference path="../../Visuals/obj/Visuals.d.ts"/> 
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var SampleDataViews = (function () {
                function SampleDataViews() {
                }
                SampleDataViews.prototype.getName = function () {
                    return this.name;
                };
                SampleDataViews.prototype.getDisplayName = function () {
                    return this.displayName;
                };
                SampleDataViews.prototype.hasPlugin = function (pluginName) {
                    return this.visuals.indexOf(pluginName) >= 0;
                };
                SampleDataViews.prototype.getRandomValue = function (min, max) {
                    var value = Math.random() * (max - min) + min;
                    return Math.ceil(value * 100) / 100;
                };
                SampleDataViews.prototype.randomElement = function (arr) {
                    return arr[Math.floor(Math.random() * arr.length)];
                };
                return SampleDataViews;
            })();
            sampleDataViews.SampleDataViews = SampleDataViews;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var DataViewTransform = powerbi.data.DataViewTransform;
            var ValueType = powerbi.ValueType;
            var PrimitiveType = powerbi.PrimitiveType;
            var FileStorageData = (function (_super) {
                __extends(FileStorageData, _super);
                function FileStorageData() {
                    _super.apply(this, arguments);
                    this.name = "FileStorageData";
                    this.displayName = "File storage data";
                    this.visuals = ['treemap',
                    ];
                    this.sampleData = [742731.43, 162066.43, 283085.78, 300263.49, 376074.57, 814724.34];
                    this.sampleMin = 30000;
                    this.sampleMax = 1000000;
                }
                FileStorageData.prototype.getDataViews = function () {
                    var treeMapMetadata = {
                        columns: [
                            { displayName: 'EventCount', queryName: 'select1', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) },
                            { displayName: 'MedalCount', queryName: 'select2', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) }
                        ]
                    };
                    var columns = [
                        { displayName: 'Program Files', queryName: 'select1', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) },
                        { displayName: 'Documents and Settings', queryName: 'select2', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) },
                        { displayName: 'Windows', queryName: 'select3', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) },
                        { displayName: 'Recovery', queryName: 'select4', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) },
                        { displayName: 'Users', queryName: 'select5', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) },
                        { displayName: 'ProgramData', queryName: 'select6', isMeasure: true, properties: { "Y": true }, type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double) },
                    ];
                    var values = [];
                    for (var i = 0; i < columns.length; i++) {
                        values.push({
                            source: columns[i],
                            values: [this.sampleData[i]]
                        });
                    }
                    return [{
                            metadata: treeMapMetadata,
                            categorical: {
                                values: DataViewTransform.createValueColumns(values)
                            }
                        }];
                };
                FileStorageData.prototype.randomize = function () {
                    var _this = this;
                    this.sampleData = this.sampleData.map(function () { return _this.getRandomValue(_this.sampleMin, _this.sampleMax); });
                };
                return FileStorageData;
            })(sampleDataViews.SampleDataViews);
            sampleDataViews.FileStorageData = FileStorageData;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var ImageData = (function (_super) {
                __extends(ImageData, _super);
                function ImageData() {
                    _super.apply(this, arguments);
                    this.name = "ImageData";
                    this.displayName = "Image data";
                    this.visuals = ['image',
                    ];
                    this.sampleImages = [
                        'data:image/png;base64,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',
                        'data:image/png;base64,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',
                    ];
                    this.sampleIndex = 0;
                    this.sampleData = this.sampleImages[this.sampleIndex];
                }
                ImageData.prototype.getDataViews = function () {
                    return [{
                            metadata: {
                                columns: [],
                                objects: { general: { imageUrl: this.sampleData } }
                            }
                        }];
                };
                ImageData.prototype.randomize = function () {
                    this.sampleIndex++;
                    if (this.sampleIndex >= this.sampleImages.length) {
                        this.sampleIndex = 0;
                    }
                    this.sampleData = this.sampleImages[this.sampleIndex];
                };
                return ImageData;
            })(sampleDataViews.SampleDataViews);
            sampleDataViews.ImageData = ImageData;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var RichtextData = (function (_super) {
                __extends(RichtextData, _super);
                function RichtextData() {
                    _super.apply(this, arguments);
                    this.name = "RichtextData";
                    this.displayName = "Richtext data";
                    this.visuals = ['textbox',
                    ];
                    this.sampleData = ["Example Text",
                        "company's data",
                        "Power BI",
                        "visualization",
                        "spot trends",
                        "charts",
                        "simple drag-and-drop gestures",
                        "personalized dashboards"
                    ];
                    this.sampleSingleData = this.sampleData[0];
                    this.sampleTextStyle = {
                        fontFamily: "Heading",
                        fontSize: "24px",
                        textDecoration: "underline",
                        fontWeight: "300",
                        fontStyle: "italic",
                        float: "left"
                    };
                }
                RichtextData.prototype.getDataViews = function () {
                    // 1 paragraphs, with formatting
                    var paragraphs = [
                        {
                            horizontalTextAlignment: "center",
                            textRuns: [{
                                    value: this.sampleSingleData,
                                    textStyle: this.sampleTextStyle
                                }]
                        }];
                    return this.buildParagraphsDataView(paragraphs);
                };
                RichtextData.prototype.buildParagraphsDataView = function (paragraphs) {
                    return [{ metadata: { columns: [], objects: { general: { paragraphs: paragraphs } } } }];
                };
                RichtextData.prototype.randomize = function () {
                    this.sampleSingleData = this.randomElement(this.sampleData);
                    this.sampleTextStyle.fontSize = this.getRandomValue(12, 40) + "px";
                    this.sampleTextStyle.fontWeight = this.getRandomValue(300, 700).toString();
                };
                return RichtextData;
            })(sampleDataViews.SampleDataViews);
            sampleDataViews.RichtextData = RichtextData;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var DataViewTransform = powerbi.data.DataViewTransform;
            var SalesByCountryData = (function (_super) {
                __extends(SalesByCountryData, _super);
                function SalesByCountryData() {
                    _super.apply(this, arguments);
                    this.name = "SalesByCountryData";
                    this.displayName = "Sales By Country";
                    this.visuals = ['default'];
                    this.sampleData = [
                        [742731.43, 162066.43, 283085.78, 300263.49, 376074.57, 814724.34],
                        [123455.43, 40566.43, 200457.78, 5000.49, 320000.57, 450000.34]
                    ];
                    this.sampleMin = 30000;
                    this.sampleMax = 1000000;
                    this.sampleSingleData = 55943.67;
                }
                SalesByCountryData.prototype.getDataViews = function () {
                    var fieldExpr = powerbi.data.SQExprBuilder.fieldDef({ schema: 's', entity: "table1", column: "country" });
                    var categoryValues = ["Australia", "Canada", "France", "Germany", "United Kingdom", "United States"];
                    var categoryIdentities = categoryValues.map(function (value) {
                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
                        return powerbi.data.createDataViewScopeIdentity(expr);
                    });
                    // Metadata, describes the data columns, and provides the visual with hints
                    // so it can decide how to best represent the data
                    var dataViewMetadata = {
                        columns: [
                            {
                                displayName: 'Country',
                                queryName: 'Country',
                                type: powerbi.ValueType.fromDescriptor({ text: true })
                            },
                            {
                                displayName: 'Sales Amount (2014)',
                                isMeasure: true,
                                format: "$0,000.00",
                                queryName: 'sales1',
                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
                                objects: { dataPoint: { fill: { solid: { color: 'purple' } } } },
                            },
                            {
                                displayName: 'Sales Amount (2015)',
                                isMeasure: true,
                                format: "$0,000.00",
                                queryName: 'sales2',
                                type: powerbi.ValueType.fromDescriptor({ numeric: true })
                            }
                        ]
                    };
                    var columns = [
                        {
                            source: dataViewMetadata.columns[1],
                            // Sales Amount for 2014
                            values: this.sampleData[0],
                        },
                        {
                            source: dataViewMetadata.columns[2],
                            // Sales Amount for 2015
                            values: this.sampleData[1],
                        }
                    ];
                    var dataValues = DataViewTransform.createValueColumns(columns);
                    var tableDataValues = categoryValues.map(function (countryName, idx) {
                        return [countryName, columns[0].values[idx], columns[1].values[idx]];
                    });
                    return [{
                            metadata: dataViewMetadata,
                            categorical: {
                                categories: [{
                                        source: dataViewMetadata.columns[0],
                                        values: categoryValues,
                                        identity: categoryIdentities,
                                    }],
                                values: dataValues
                            },
                            table: {
                                rows: tableDataValues,
                                columns: dataViewMetadata.columns,
                            },
                            single: { value: this.sampleSingleData }
                        }];
                };
                SalesByCountryData.prototype.randomize = function () {
                    var _this = this;
                    this.sampleData = this.sampleData.map(function (item) {
                        return item.map(function () { return _this.getRandomValue(_this.sampleMin, _this.sampleMax); });
                    });
                    this.sampleSingleData = this.getRandomValue(this.sampleMin, this.sampleMax);
                };
                return SalesByCountryData;
            })(sampleDataViews.SampleDataViews);
            sampleDataViews.SalesByCountryData = SalesByCountryData;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var DataViewTransform = powerbi.data.DataViewTransform;
            var SalesByDayOfWeekData = (function (_super) {
                __extends(SalesByDayOfWeekData, _super);
                function SalesByDayOfWeekData() {
                    _super.apply(this, arguments);
                    this.name = "SalesByDayOfWeekData";
                    this.displayName = "Sales by day of week";
                    this.visuals = ['comboChart',
                        'dataDotClusteredColumnComboChart',
                        'dataDotStackedColumnComboChart',
                        'lineStackedColumnComboChart',
                        'lineClusteredColumnComboChart'
                    ];
                    this.sampleData1 = [
                        [742731.43, 162066.43, 283085.78, 300263.49, 376074.57, 814724.34],
                        [123455.43, 40566.43, 200457.78, 5000.49, 320000.57, 450000.34]
                    ];
                    this.sampleMin1 = 30000;
                    this.sampleMax1 = 1000000;
                    this.sampleData2 = [
                        [31, 17, 24, 30, 37, 40, 12],
                        [30, 35, 20, 25, 32, 35, 15]
                    ];
                    this.sampleMin2 = 10;
                    this.sampleMax2 = 45;
                }
                SalesByDayOfWeekData.prototype.getDataViews = function () {
                    //first dataView - Sales by day of week
                    var fieldExpr = powerbi.data.SQExprBuilder.fieldDef({ schema: 's', entity: "table1", column: "day of week" });
                    var categoryValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    var categoryIdentities = categoryValues.map(function (value) {
                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
                        return powerbi.data.createDataViewScopeIdentity(expr);
                    });
                    // Metadata, describes the data columns, and provides the visual with hints
                    // so it can decide how to best represent the data
                    var dataViewMetadata = {
                        columns: [
                            {
                                displayName: 'Day',
                                queryName: 'Day',
                                type: powerbi.ValueType.fromDescriptor({ text: true })
                            },
                            {
                                displayName: 'Previous week sales',
                                isMeasure: true,
                                format: "$0,000.00",
                                queryName: 'sales1',
                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
                                objects: { dataPoint: { fill: { solid: { color: 'purple' } } } },
                            },
                            {
                                displayName: 'This week sales',
                                isMeasure: true,
                                format: "$0,000.00",
                                queryName: 'sales2',
                                type: powerbi.ValueType.fromDescriptor({ numeric: true })
                            }
                        ]
                    };
                    var columns = [
                        {
                            source: dataViewMetadata.columns[1],
                            // Sales Amount for 2014
                            values: this.sampleData1[0],
                        },
                        {
                            source: dataViewMetadata.columns[2],
                            // Sales Amount for 2015
                            values: this.sampleData1[1],
                        }
                    ];
                    var dataValues = DataViewTransform.createValueColumns(columns);
                    var tableDataValues = categoryValues.map(function (dayName, idx) {
                        return [dayName, columns[0].values[idx], columns[1].values[idx]];
                    });
                    //first dataView - Sales by day of week END
                    //second dataView - Temperature by day of week
                    var fieldExprTemp = powerbi.data.SQExprBuilder.fieldDef({ schema: 's', entity: "table2", column: "day of week" });
                    var categoryValuesTemp = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
                    var categoryIdentitiesTemp = categoryValuesTemp.map(function (value) {
                        var exprTemp = powerbi.data.SQExprBuilder.equal(fieldExprTemp, powerbi.data.SQExprBuilder.text(value));
                        return powerbi.data.createDataViewScopeIdentity(exprTemp);
                    });
                    // Metadata, describes the data columns, and provides the visual with hints
                    // so it can decide how to best represent the data
                    var dataViewMetadataTemp = {
                        columns: [
                            {
                                displayName: 'Day',
                                queryName: 'Day',
                                type: powerbi.ValueType.fromDescriptor({ text: true })
                            },
                            {
                                displayName: 'Previous week temperature',
                                isMeasure: true,
                                queryName: 'temp1',
                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
                            },
                            {
                                displayName: 'This week temperature',
                                isMeasure: true,
                                queryName: 'temp2',
                                type: powerbi.ValueType.fromDescriptor({ numeric: true })
                            }
                        ]
                    };
                    var columnsTemp = [
                        {
                            source: dataViewMetadataTemp.columns[1],
                            // temperature prev week
                            values: this.sampleData2[0],
                        },
                        {
                            source: dataViewMetadataTemp.columns[2],
                            // temperature this week
                            values: this.sampleData2[1],
                        }
                    ];
                    var dataValuesTemp = DataViewTransform.createValueColumns(columnsTemp);
                    var tableDataValuesTemp = categoryValuesTemp.map(function (dayName, idx) {
                        return [dayName, columnsTemp[0].values[idx], columnsTemp[1].values[idx]];
                    });
                    //first dataView - Sales by day of week END
                    return [{
                            metadata: dataViewMetadata,
                            categorical: {
                                categories: [{
                                        source: dataViewMetadata.columns[0],
                                        values: categoryValues,
                                        identity: categoryIdentities,
                                    }],
                                values: dataValues
                            },
                            table: {
                                rows: tableDataValues,
                                columns: dataViewMetadata.columns,
                            }
                        },
                        {
                            metadata: dataViewMetadataTemp,
                            categorical: {
                                categories: [{
                                        source: dataViewMetadataTemp.columns[0],
                                        values: categoryValuesTemp,
                                        identity: categoryIdentitiesTemp,
                                    }],
                                values: dataValuesTemp
                            },
                            table: {
                                rows: tableDataValuesTemp,
                                columns: dataViewMetadataTemp.columns,
                            }
                        }];
                };
                SalesByDayOfWeekData.prototype.randomize = function () {
                    var _this = this;
                    this.sampleData1 = this.sampleData1.map(function (item) {
                        return item.map(function () { return _this.getRandomValue(_this.sampleMin1, _this.sampleMax1); });
                    });
                    this.sampleData2 = this.sampleData2.map(function (item) {
                        return item.map(function () { return _this.getRandomValue(_this.sampleMin2, _this.sampleMax2); });
                    });
                };
                return SalesByDayOfWeekData;
            })(sampleDataViews.SampleDataViews);
            sampleDataViews.SalesByDayOfWeekData = SalesByDayOfWeekData;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var DataViewTransform = powerbi.data.DataViewTransform;
            var SimpleGaugeData = (function (_super) {
                __extends(SimpleGaugeData, _super);
                function SimpleGaugeData() {
                    _super.apply(this, arguments);
                    this.name = "SimpleGaugeData";
                    this.displayName = "Simple gauge data";
                    this.visuals = ['gauge',
                    ];
                }
                SimpleGaugeData.prototype.getDataViews = function () {
                    var gaugeDataViewMetadata = {
                        columns: [
                            {
                                displayName: 'col1',
                                roles: { 'Y': true },
                                isMeasure: true,
                                objects: { general: { formatString: '$0' } },
                            }, {
                                displayName: 'col2',
                                roles: { 'MinValue': true },
                                isMeasure: true
                            }, {
                                displayName: 'col3',
                                roles: { 'MaxValue': true },
                                isMeasure: true
                            }, {
                                displayName: 'col4',
                                roles: { 'TargetValue': true },
                                isMeasure: true
                            }],
                        groups: [],
                        measures: [0],
                    };
                    return [{
                            metadata: gaugeDataViewMetadata,
                            single: { value: 500 },
                            categorical: {
                                values: DataViewTransform.createValueColumns([
                                    {
                                        source: gaugeDataViewMetadata.columns[0],
                                        values: [500],
                                    }, {
                                        source: gaugeDataViewMetadata.columns[1],
                                        values: [0],
                                    }, {
                                        source: gaugeDataViewMetadata.columns[2],
                                        values: [300],
                                    }, {
                                        source: gaugeDataViewMetadata.columns[3],
                                        values: [200],
                                    }])
                            }
                        }];
                };
                SimpleGaugeData.prototype.randomize = function () {
                };
                return SimpleGaugeData;
            })(sampleDataViews.SampleDataViews);
            sampleDataViews.SimpleGaugeData = SimpleGaugeData;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var SimpleMatrixData = (function (_super) {
                __extends(SimpleMatrixData, _super);
                function SimpleMatrixData() {
                    _super.apply(this, arguments);
                    this.name = "SimpleMatrixData";
                    this.displayName = "Simple matrix data";
                    this.visuals = ['matrix',
                    ];
                }
                SimpleMatrixData.prototype.getDataViews = function () {
                    var dataTypeNumber = powerbi.ValueType.fromPrimitiveTypeAndCategory(powerbi.PrimitiveType.Double);
                    var dataTypeString = powerbi.ValueType.fromPrimitiveTypeAndCategory(powerbi.PrimitiveType.Text);
                    var measureSource1 = { displayName: 'measure1', type: dataTypeNumber, isMeasure: true, index: 3, objects: { general: { formatString: '#.0' } } };
                    var measureSource2 = { displayName: 'measure2', type: dataTypeNumber, isMeasure: true, index: 4, objects: { general: { formatString: '#.00' } } };
                    var measureSource3 = { displayName: 'measure3', type: dataTypeNumber, isMeasure: true, index: 5, objects: { general: { formatString: '#' } } };
                    var rowGroupSource1 = { displayName: 'RowGroup1', queryName: 'RowGroup1', type: dataTypeString, index: 0 };
                    var rowGroupSource2 = { displayName: 'RowGroup2', queryName: 'RowGroup2', type: dataTypeString, index: 1 };
                    var rowGroupSource3 = { displayName: 'RowGroup3', queryName: 'RowGroup3', type: dataTypeString, index: 2 };
                    var matrixThreeMeasuresThreeRowGroups = {
                        rows: {
                            root: {
                                children: [
                                    {
                                        level: 0,
                                        value: 'North America',
                                        children: [
                                            {
                                                level: 1,
                                                value: 'Canada',
                                                children: [
                                                    {
                                                        level: 2,
                                                        value: 'Ontario',
                                                        values: {
                                                            0: { value: 1000 },
                                                            1: { value: 1001, valueSourceIndex: 1 },
                                                            2: { value: 1002, valueSourceIndex: 2 }
                                                        }
                                                    },
                                                    {
                                                        level: 2,
                                                        value: 'Quebec',
                                                        values: {
                                                            0: { value: 1010 },
                                                            1: { value: 1011, valueSourceIndex: 1 },
                                                            2: { value: 1012, valueSourceIndex: 2 }
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                level: 1,
                                                value: 'USA',
                                                children: [
                                                    {
                                                        level: 2,
                                                        value: 'Washington',
                                                        values: {
                                                            0: { value: 1100 },
                                                            1: { value: 1101, valueSourceIndex: 1 },
                                                            2: { value: 1102, valueSourceIndex: 2 }
                                                        }
                                                    },
                                                    {
                                                        level: 2,
                                                        value: 'Oregon',
                                                        values: {
                                                            0: { value: 1110 },
                                                            1: { value: 1111, valueSourceIndex: 1 },
                                                            2: { value: 1112, valueSourceIndex: 2 }
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        level: 0,
                                        value: 'South America',
                                        children: [
                                            {
                                                level: 1,
                                                value: 'Brazil',
                                                children: [
                                                    {
                                                        level: 2,
                                                        value: 'Amazonas',
                                                        values: {
                                                            0: { value: 2000 },
                                                            1: { value: 2001, valueSourceIndex: 1 },
                                                            2: { value: 2002, valueSourceIndex: 2 }
                                                        }
                                                    },
                                                    {
                                                        level: 2,
                                                        value: 'Mato Grosso',
                                                        values: {
                                                            0: { value: 2010 },
                                                            1: { value: 2011, valueSourceIndex: 1 },
                                                            2: { value: 2012, valueSourceIndex: 2 }
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                level: 1,
                                                value: 'Chile',
                                                children: [
                                                    {
                                                        level: 2,
                                                        value: 'Arica',
                                                        values: {
                                                            0: { value: 2100 },
                                                            1: { value: 2101, valueSourceIndex: 1 },
                                                            2: { value: 2102, valueSourceIndex: 2 }
                                                        }
                                                    },
                                                    {
                                                        level: 2,
                                                        value: 'Parinacota',
                                                        values: {
                                                            0: { value: 2110 },
                                                            1: { value: 2111, valueSourceIndex: 1 },
                                                            2: { value: 2112, valueSourceIndex: 2 }
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                ]
                            },
                            levels: [
                                { sources: [rowGroupSource1] },
                                { sources: [rowGroupSource2] },
                                { sources: [rowGroupSource3] }
                            ]
                        },
                        columns: {
                            root: {
                                children: [
                                    { level: 0 },
                                    { level: 0, levelSourceIndex: 1 },
                                    { level: 0, levelSourceIndex: 2 }
                                ]
                            },
                            levels: [{
                                    sources: [
                                        measureSource1,
                                        measureSource2,
                                        measureSource3
                                    ]
                                }]
                        },
                        valueSources: [
                            measureSource1,
                            measureSource2,
                            measureSource3
                        ]
                    };
                    return [{
                            metadata: { columns: [rowGroupSource1, rowGroupSource2, rowGroupSource3], segment: {} },
                            matrix: matrixThreeMeasuresThreeRowGroups
                        }];
                };
                SimpleMatrixData.prototype.randomize = function () {
                };
                return SimpleMatrixData;
            })(sampleDataViews.SampleDataViews);
            sampleDataViews.SimpleMatrixData = SimpleMatrixData;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var ValueType = powerbi.ValueType;
            var PrimitiveType = powerbi.PrimitiveType;
            var SimpleTableData = (function (_super) {
                __extends(SimpleTableData, _super);
                function SimpleTableData() {
                    _super.apply(this, arguments);
                    this.name = "SimpleTableData";
                    this.displayName = "Simple table data";
                    this.visuals = ['table',
                    ];
                }
                SimpleTableData.prototype.getDataViews = function () {
                    var dataTypeNumber = ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Double);
                    var dataTypeString = ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.Text);
                    var groupSource1 = { displayName: 'group1', type: dataTypeString, index: 0 };
                    var groupSource2 = { displayName: 'group2', type: dataTypeString, index: 1 };
                    var groupSource3 = { displayName: 'group3', type: dataTypeString, index: 2 };
                    var measureSource1 = { displayName: 'measure1', type: dataTypeNumber, isMeasure: true, index: 3, objects: { general: { formatString: '#.0' } } };
                    var measureSource2 = { displayName: 'measure2', type: dataTypeNumber, isMeasure: true, index: 4, objects: { general: { formatString: '#.00' } } };
                    var measureSource3 = { displayName: 'measure3', type: dataTypeNumber, isMeasure: true, index: 5, objects: { general: { formatString: '#' } } };
                    return [{
                            metadata: { columns: [groupSource1, measureSource1, groupSource2, measureSource2, groupSource3, measureSource3] },
                            table: {
                                columns: [groupSource1, measureSource1, groupSource2, measureSource2, groupSource3, measureSource3],
                                rows: [
                                    ['A', 100, 'aa', 101, 'aa1', 102],
                                    ['A', 103, 'aa', 104, 'aa2', 105],
                                    ['A', 106, 'ab', 107, 'ab1', 108],
                                    ['B', 109, 'ba', 110, 'ba1', 111],
                                    ['B', 112, 'bb', 113, 'bb1', 114],
                                    ['B', 115, 'bb', 116, 'bb2', 117],
                                    ['C', 118, 'cc', 119, 'cc1', 120],
                                ]
                            }
                        }];
                };
                SimpleTableData.prototype.randomize = function () {
                };
                return SimpleTableData;
            })(sampleDataViews.SampleDataViews);
            sampleDataViews.SimpleTableData = SimpleTableData;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/// <reference path="../_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleDataViews;
        (function (sampleDataViews) {
            var DataViewTransform = powerbi.data.DataViewTransform;
            var TeamScoreData = (function (_super) {
                __extends(TeamScoreData, _super);
                function TeamScoreData() {
                    _super.apply(this, arguments);
                    this.name = "TeamScoreData";
                    this.displayName = "Team score data";
                    this.visuals = ['cheerMeter',
                    ];
                }
                TeamScoreData.prototype.getDataViews = function () {
                    var fieldExpr = powerbi.data.SQExprBuilder.fieldDef({ schema: 's', entity: "table1", column: "teams" });
                    var categoryValues = ["Seahawks", "49ers"];
                    var categoryIdentities = categoryValues.map(function (value) {
                        var expr = powerbi.data.SQExprBuilder.equal(fieldExpr, powerbi.data.SQExprBuilder.text(value));
                        return powerbi.data.createDataViewScopeIdentity(expr);
                    });
                    var dataViewMetadata = {
                        columns: [
                            {
                                displayName: 'Team',
                                queryName: 'Team',
                                type: powerbi.ValueType.fromDescriptor({ text: true })
                            },
                            {
                                displayName: 'Volume',
                                isMeasure: true,
                                queryName: 'volume1',
                                type: powerbi.ValueType.fromDescriptor({ numeric: true }),
                            },
                        ]
                    };
                    var columns = [
                        {
                            source: dataViewMetadata.columns[1],
                            values: [90, 30],
                        },
                    ];
                    var dataValues = DataViewTransform.createValueColumns(columns);
                    return [{
                            metadata: dataViewMetadata,
                            categorical: {
                                categories: [{
                                        source: dataViewMetadata.columns[0],
                                        values: categoryValues,
                                        identity: categoryIdentities,
                                        objects: [
                                            {
                                                dataPoint: {
                                                    fill: {
                                                        solid: {
                                                            color: 'rgb(165, 172, 175)'
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                dataPoint: {
                                                    fill: {
                                                        solid: {
                                                            color: 'rgb(175, 30, 44)'
                                                        }
                                                    }
                                                }
                                            },
                                        ]
                                    }],
                                values: dataValues,
                            },
                        }];
                };
                TeamScoreData.prototype.randomize = function () {
                };
                return TeamScoreData;
            })(sampleDataViews.SampleDataViews);
            sampleDataViews.TeamScoreData = TeamScoreData;
        })(sampleDataViews = visuals.sampleDataViews || (visuals.sampleDataViews = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/// <reference path="_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var sampleData;
        (function (sampleData) {
            var sampleDataViews = powerbi.visuals.sampleDataViews;
            var SampleData = (function () {
                function SampleData() {
                }
                /**
                 * Returns sample data view for a visualization element specified.
                 */
                SampleData.getSamplesByPluginName = function (pluginName) {
                    var samples = this.data.filter(function (item) { return item.hasPlugin(pluginName); });
                    if (samples.length > 0) {
                        return samples;
                    }
                    return this.data.filter(function (item) { return item.hasPlugin("default"); });
                };
                /**
                 * Returns sampleDataView Instance for a visualization element specified.
                 */
                SampleData.getDataViewsBySampleName = function (sampleName) {
                    return this.data.filter(function (item) { return (item.getName() === sampleName); })[0];
                };
                SampleData.data = [
                    new sampleDataViews.FileStorageData(),
                    new sampleDataViews.ImageData(),
                    new sampleDataViews.RichtextData(),
                    new sampleDataViews.SalesByCountryData(),
                    new sampleDataViews.SalesByDayOfWeekData(),
                    new sampleDataViews.SimpleGaugeData(),
                    new sampleDataViews.SimpleMatrixData(),
                    new sampleDataViews.SimpleTableData(),
                    new sampleDataViews.TeamScoreData()
                ];
                return SampleData;
            })();
            sampleData.SampleData = SampleData;
        })(sampleData = visuals.sampleData || (visuals.sampleData = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
*  Power BI Visualizations
*
*  Copyright (c) Microsoft Corporation
*  All rights reserved.
*  MIT License
*
*  Permission is hereby granted, free of charge, to any person obtaining a copy
*  of this software and associated documentation files (the ""Software""), to deal
*  in the Software without restriction, including without limitation the rights
*  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*  copies of the Software, and to permit persons to whom the Software is
*  furnished to do so, subject to the following conditions:
*
*  The above copyright notice and this permission notice shall be included in
*  all copies or substantial portions of the Software.
*
*  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
*  THE SOFTWARE.
*/
/// <reference path="_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var SampleData = powerbi.visuals.sampleData.SampleData;
        var HostControls = (function () {
            function HostControls(parent) {
                var _this = this;
                this.animation_duration = 250;
                this.suppressAnimations = false;
                parent.find('#randomize').on('click', function () { return _this.randomize(); });
                this.dataViewsSelect = parent.find('#dataViewsSelect').first();
                this.suppressAnimationsElement = parent.find('input[name=suppressAnimations]').first();
                this.suppressAnimationsElement.on('change', function () { return _this.onChangeSuppressAnimations(); });
                this.animationDurationElement = parent.find('input[name=animation_duration]').first();
                this.animationDurationElement.on('change', function () { return _this.onChangeDuration(); });
            }
            HostControls.prototype.setVisual = function (visualElement, viewport) {
                this.visualElement = visualElement;
                this.viewport = viewport;
            };
            HostControls.prototype.randomize = function () {
                this.sampleDataViews.randomize();
                this.onChange();
            };
            HostControls.prototype.onChangeDuration = function () {
                this.animation_duration = parseInt(this.animationDurationElement.val(), 10);
                this.onChange();
            };
            HostControls.prototype.onChangeSuppressAnimations = function () {
                this.suppressAnimations = this.suppressAnimationsElement.val();
                this.onChange();
            };
            HostControls.prototype.onChange = function () {
                if (this.visualElement.update) {
                    this.visualElement.update({
                        dataViews: this.sampleDataViews.getDataViews(),
                        suppressAnimations: this.suppressAnimations,
                        viewport: this.viewport
                    });
                }
                else {
                    this.visualElement.onDataChanged({
                        dataViews: this.sampleDataViews.getDataViews(),
                        suppressAnimations: this.suppressAnimations
                    });
                    this.visualElement.onResizing(this.viewport);
                }
            };
            HostControls.prototype.onPluginChange = function (pluginName) {
                var _this = this;
                this.dataViewsSelect.empty();
                var dataViews = SampleData.getSamplesByPluginName(pluginName);
                var defaultDataView;
                dataViews.forEach(function (item, i) {
                    var option = $('<option>');
                    option.val(item.getName());
                    option.text(item.getDisplayName());
                    if (i === 0) {
                        option.attr('selected', 'selected');
                        defaultDataView = item.getName();
                    }
                    _this.dataViewsSelect.append(option);
                });
                this.dataViewsSelect.change(function () { return _this.onChangeDataViewSelection(_this.dataViewsSelect.val()); });
                if (defaultDataView) {
                    this.onChangeDataViewSelection(defaultDataView);
                }
            };
            HostControls.prototype.onChangeDataViewSelection = function (sampleName) {
                this.sampleDataViews = SampleData.getDataViewsBySampleName(sampleName);
                this.onChange();
            };
            return HostControls;
        })();
        visuals.HostControls = HostControls;
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/// <reference path="typedefs/typedefs.ts"/>
/// <reference path="typedefs/typedefs.obj.ts"/>
/// <reference path="sampleDataViews/sampleDataViews.ts"/>
/// <reference path="sampleDataViews/fileStorageData.ts"/>
/// <reference path="sampleDataViews/imageData.ts"/>
/// <reference path="sampleDataViews/richtextData.ts"/>
/// <reference path="sampleDataViews/salesByCountryData.ts"/>
/// <reference path="sampleDataViews/salesByDayOfWeekData.ts"/>
/// <reference path="sampleDataViews/simpleGaugeData.ts"/>
/// <reference path="sampleDataViews/simpleMatrixData.ts"/>
/// <reference path="sampleDataViews/simpleTableData.ts"/>
/// <reference path="sampleDataViews/teamScoreData.ts"/>
/// <reference path="sampleData.ts"/>
/// <reference path="hostControls.ts"/>
/// <reference path="app.ts"/> 
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/// <reference path="_references.ts"/>
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals_1) {
        var defaultVisualHostServices = powerbi.visuals.defaultVisualHostServices;
        var HostControls = powerbi.visuals.HostControls;
        var dataColors = new powerbi.visuals.DataColorPalette();
        var visualStyle = {
            titleText: {
                color: { value: 'rgba(51,51,51,1)' }
            },
            subTitleText: {
                color: { value: 'rgba(145,145,145,1)' }
            },
            colorPalette: {
                dataColors: dataColors,
            },
            labelText: {
                color: {
                    value: 'rgba(51,51,51,1)',
                },
                fontSize: '11px'
            },
            isHighContrast: false,
        };
        /**
         * Demonstrates Power BI visualization elements and the way to embed them in standalone web page.
         */
        var Playground = (function () {
            function Playground() {
            }
            // Performs sample app initialization.
            Playground.initialize = function () {
                this.hostControls = new HostControls($('#options'));
                this.container = $('#container');
                this.populateVisualTypeSelect();
                // Wrapper function to simplify visualization element creation when using jQuery
                $.fn.visual = function (plugin, dataView) {
                    // Step 1: Create new DOM element to represent Power BI visual
                    var element = $('<div/>');
                    element.addClass('visual');
                    element.css({
                        'background-color': 'white',
                        'padding': '10px',
                        'margin': '5px'
                    });
                    element['visible'] = function () { return true; };
                    this.append(element);
                    Playground.createVisualElement(element, plugin, dataView);
                    return this;
                };
                var visualByDefault = jsCommon.Utility.getURLParamValue('visual');
                if (visualByDefault) {
                    $('.topBar, #options').css({ "display": "none" });
                    Playground.onVisualTypeSelection(visualByDefault.toString());
                }
            };
            Playground.createVisualElement = function (element, plugin, dataView) {
                // Step 2: Instantiate Power BI visual
                var host = this.container;
                var viewport = { height: host.height() - 100, width: host.width() - 100 };
                this.visualElement = plugin.create();
                this.visualElement.init({
                    element: element,
                    host: defaultVisualHostServices,
                    style: visualStyle,
                    viewport: viewport,
                    settings: { slicingEnabled: true },
                    interactivity: { isInteractiveLegend: false, selection: false },
                    animation: { transitionImmediate: true }
                });
                this.hostControls.setVisual(this.visualElement, viewport);
            };
            ;
            Playground.populateVisualTypeSelect = function () {
                var _this = this;
                var typeSelect = $('#visualTypes');
                typeSelect.append('<option value="">(none)</option>');
                var visuals = this.pluginService.getVisuals();
                visuals.sort(function (a, b) {
                    if (a.name < b.name)
                        return -1;
                    if (a.name > b.name)
                        return 1;
                    return 0;
                });
                for (var i = 0, len = visuals.length; i < len; i++) {
                    var visual = visuals[i];
                    typeSelect.append('<option value="' + visual.name + '">' + visual.name + '</option>');
                }
                typeSelect.change(function () { return _this.onVisualTypeSelection(typeSelect.val()); });
            };
            Playground.onVisualTypeSelection = function (pluginName) {
                this.container.empty();
                if (pluginName.length === 0)
                    return;
                this.createVisualPlugin(pluginName);
                this.hostControls.onPluginChange(pluginName);
            };
            Playground.createVisualPlugin = function (pluginName) {
                var plugin = this.pluginService.getPlugin(pluginName);
                if (!plugin) {
                    this.container.html('<div class="wrongVisualWarning">Wrong visual name <span>\'' + pluginName + '\'</span> in parameters</div>');
                    return;
                }
                this.container.visual(plugin);
            };
            // Represents sample data view used by visualization elements.
            Playground.pluginService = powerbi.visuals.visualPluginFactory.create();
            return Playground;
        })();
        visuals_1.Playground = Playground;
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
