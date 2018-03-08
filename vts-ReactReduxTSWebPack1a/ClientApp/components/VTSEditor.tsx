import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class VTSEditor extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="editor-content clearfix">
<section id="tryit" className="section tryit tryit-section">
<div className="container-fluid">
    <div className="row">
        <div className="col-lg-3 col-md-3 services text-center">
   <div className="warning-modal" id="vts-warning-modal" hidden={true} >
    <div className="warn-tbl">
        <div className="warn-modal-header">
            <div className="warning-modal-header-text"><h5 id="warning-title"></h5></div>
        </div>
        <div className="warn-tbl-body" id="warn-tbl-bod">
            <div className="warn-tbl-row">
                <div className="warning-modal-body" id="warning-desc">
                </div>
            </div>
        </div>
    </div>
    <div className="warn-modal-foot">
        <div className="warn-modal-foot-content">
        </div>
    </div>
</div>                            
<div className="instruction-modal" id="vts-instruction-modal">
    <div className="instruction-tbl" id="tbl-instruction" >
        <div className="instruction-modal-header">
            <div className="instruction-modal-header-text directions">
                <span className="icon icon-streetsign instructions-icon directions"></span>Directions
            </div>
        </div>
        <div className="instruction-tbl-body" id="instruction-tbl-bod" hidden={true} >
            <div className="instruction-tbl-row">
                <div className="instruction-modal-body" id="instruction-desc">
                    <p> 1.You can start typing directly in the editor or copy/paste to the editor from a source document. <br />
                        &nbsp;&nbsp;<b>NOTE</b>: If you are pasting from <b>Microsoft Word</b>, use <b>ctrl-shift-v</b>. <br /></p>
                        <p>2. In &ldquo;Scan Settings&rdquo; check the boxes next to the warnings you'd like to capture.</p>
                        <p>3. Click the &ldquo;Analyze&rdquo; button to run a scan. In a few moments you'll get your results.</p>
                        <p>4. Refer to the section &ldquo;Warning Type Definitions&rdquo;, on the right, for a key to warning underline style and color-coded highlighting.</p>
                        <p><b>Coming Soon</b>: You&rsquo;ll be able to upload a document in *.txt or *.docx formats! </p>
                 </div>
            </div>
        </div>
    </div>
    <div className="instruction-modal-foot">
        <div className="instruction-modal-foot-content">
        </div>
    </div>
</div>

<div className="definition-modal-body" id="definition-modal">
    <div className="instruction-modal-header">
        <div className="instruction-modal-header-text definitions"><span className="instructions definitions icon icon-key "></span>Warning Type Definitions</div>
    </div>
    <div className="definition-tbl" id="tbl-definition" hidden={true} >
        <div className="definition-tbl-body">
            <div className="definition-tbl-row">
                <div className="definition-tbl-cell-title"><div className="vts-CoordinationAmbiguity">Coordination Ambiguities</div><div className="definition-tbl-cell-desc">These analytics detect patterns of language constructed around coordinator constructions. An example of a coordinator type pattern is &ldquo;the old men and women went to church.&rdquo; The risk occurs because the modifier &ldquo;old&rdquo;  is not clear in it’s applicability to the &ldquo;men&rdquo; and &ldquo;women&rdquo;  occurrences. Did both old men and old women go to church or only old men and women of any ages? Coordination Ambiguities will have a single solid bottom border.</div></div>
            </div>
            <div className="definition-tbl-row">
                <div className="definition-tbl-cell-title"><div className="vts-ReferentAmbiguity">Referent Ambiguities</div><div className="definition-tbl-cell-desc">Analytics that detect a pronoun distant from the referent to which a pronoun is attached. The more distant the referent the more likely the pronoun will be thought to apply to an unintended referent. Referent Ambiguities will have a dashed bottom border.</div></div>
            </div>
            <div className="definition-tbl-row">
                <div className="definition-tbl-cell-title"><div className="vts-SpeculativeModal">Speculatives</div><div className="definition-tbl-cell-desc">Modals are usages of language that express uncertainty, necessity, ability or permission most often in a weak manner. Examples are words like can, could, may, ought, should and others of like expressions. Speculatives will have a dotted bottom border.</div></div>
            </div>
            <div className="definition-tbl-row">
                <div className="definition-tbl-cell-title"><div className="vts-ParseFailure">Long Sentence</div><div className="definition-tbl-cell-desc">These warnings occur when the sentence in question is long enough to present a misunderstanding. Studies have shown that sentences more than fourteen words in length have a greater risk of ambiguity. Long Sentences will have a thin double bottom border.</div></div>
            </div>
            <div className="definition-tbl-row">
                <div className="definition-tbl-cell-title"><div className="vts-MultiWarn">Multiple Warnings</div><div className="definition-tbl-cell-desc">Sentences with multiple warnings will be indicated this way- a faint red background color and thick bottom double-border.</div></div>
            </div>
        </div>
    </div>
</div>

</div>


<div className="col-lg-6 col-md-6 services text-center">
    <div className="editor-window">
        <form method="post">
        <div id="editor1" name="editor1" rows={10} cols={80}>
            </div>
        </form>
    </div>
</div>

<div className="col-lg-3 col-md-3 services text-center">
   <div className="settings-modal-body" id="results-modal">
    <div className="instruction-modal-header">
        <div className="instruction-modal-header-text settings"><span className="instructions icon  icon-adjustments settings"></span>Scan Settings</div>
    </div>
    <div className="settings-tbl" id="tbl-settings" hidden={true} >
        <div className="settings-tbl-row settings-tbl-heading">
            <div className="settings-tbl-head"></div>
            <div className="settings-tbl-head">Warning Types</div>
        </div>
        <div className="settings-tbl-body">
            <div className="settings-tbl-row">
                <div className="settings-tbl-cell-cbx"><input type="checkbox" id="cbx-CoordinationAmbiguity" checked /></div>
                <div className="settings-tbl-cell-title vts-CoordinationAmbiguity">Coordination Ambiguities</div>
            </div>
            <div className="settings-tbl-row">
                <div className="settings-tbl-cell-cbx"><input type="checkbox" id="cbx-ReferentAmbiguity" checked /></div>
                <div className="settings-tbl-cell-title vts-ReferentAmbiguity">Referent Ambiguities</div>
            </div>
            <div className="settings-tbl-row">
                <div className="settings-tbl-cell-cbx"><input type="checkbox" id="cbx-SpeculativeModal" checked /></div>
                <div className="settings-tbl-cell-title vts-SpeculativeModal">Speculatives</div>
            </div>
            <div className="settings-tbl-row">
                <div className="settings-tbl-cell-cbx"><input type="checkbox" id="cbx-ParseFailure" checked /></div>
                <div className="settings-tbl-cell-title vts-ParseFailure">Long Sentences</div>
            </div>
            <div className="settings-tbl-row">
                <div className="settings-tbl-cell-cbx"></div>
                <div className="settings-tbl-cell-title settings-instructionse">Check boxes to include warning type in analysis.</div>
            </div>
        </div><input itemType="checkbox" id="cbx-MultiWarn" hidden={true} checked />
    </div>
</div>
<div className="results-modal-body" id="results-modal" >
    <div className="instruction-modal-header">
        <div className="instruction-modal-header-text result"><span className="instructions icon icon-presentation instructions-icon result"></span>Scan Results</div>
    </div>
    <div className="result-tbl" id="tbl-result" hidden={true} >
        <div className="result-tbl-row result-tbl-heading">
            <div className="result-tbl-head"><div id="result-qty">Qty</div></div>
            <div className="result-tbl-head">Warning Type</div>
        </div>
        <div className="result-tbl-body">
            <div className="result-tbl-row">
                <div className="result-tbl-cell-count" id="dCoordinationAmbiguity"></div>
                <div className="result-tbl-cell-title vts-CoordinationAmbiguity">Coordination Ambiguities</div>
            </div>
            <div className="result-tbl-row">
                <div className="result-tbl-cell-count" id="dReferentAmbiguity"></div>
                <div className="result-tbl-cell-title vts-ReferentAmbiguity">Referent Ambiguities</div>
            </div>
            <div className="result-tbl-row">
                <div className="result-tbl-cell-count" id="dSpeculativeModal"></div>
                <div className="result-tbl-cell-title vts-SpeculativeModal">Speculatives</div>
            </div>
            <div className="result-tbl-row">
                <div className="result-tbl-cell-count" id="dParseFailure"></div>
                <div className="result-tbl-cell-title vts-ParseFailure">Long Sentences</div>
            </div>
        </div>
    </div>
</div>
<div>
    <div className="vts-action-scan" id="check-text">Analyze</div>
    <div className="vts-action-upload-dialog" id="upload-file">Upload File</div>
</div>
 </div>
</div>
</div>
</section>

<div className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
                Copyright &copy; 2015 Vital Text Systems Inc. All Rights Reserved. <br />
                148 Middle St. Portland ME 04101 | 1(207) 619-0729  <br />
                <a href="mailto:inquiries@vitaltextsystems.com">inquiries&commat;vitaltextsystems.com</a>
            </div>
        </div>
</div>
         
   <div className="standby-modal" id="vts-standby-modal" hidden={true} >
    <div className="my-standby-modal-content precision">
        <div className="my-standby-modal-header" id="vtsModalHeader">
            <span className="icon icon-hourglass"></span>
            <h4 id="myStandByTitle">VTAS in Action</h4>
            <h6 id="myStandByDesc">PLEASE STANDBY</h6>
        </div>
        <div className="my-standby-modal-loader-body">
            <div className="loader">Loading...</div>
        </div>
        <div className="my-standby-modal-body" id="myStandByText">
            <div className="my-standby-modal-body"></div>
            <div className="my-standby-modal-body" id="myProgMsg"></div>
            <div className="my-standby-modal-body" id="myProgress"></div>
        </div>
        <div className="my-standby-modal-footer" id="vtsModalFooter">
            <h3>&nbsp;</h3>
        </div>
    </div>
</div>

 <div className="upload-modal" id="vts-upload-modal" hidden={true} >
    <div className="my-upload-modal-content precision">
        <div className="my-upload-modal-header" id="vtsModalHeader">
            <span className="icon icon-upload"></span>
            <div className="close-upload">X</div>
            <h4 id="myuploadTitle">File Upload</h4>
            <h6 id="myuploadDesc"></h6>
        </div>
        <div className="my-upload-modal-body" id="myuploadText">
            <form id="docForm" name="docForm" role="form" formEncType="multipart/form-data">
                <div>
                    <input type="file" id="newDoc" className="uploadFile" accept="*.docx,*.txt" /><br /><br />
                    <input className="btn btn-primary vts-action-upload" type="button" value="upload" /> 
				</div>
			</form>
            <progress></progress>
        </div>
        <div className="my-upload-modal-footer" id="vtsModalFooter">
            <h3>&nbsp;</h3>
        </div>
    </div>
                </div>
 </div>
</div>;        
    }  
}