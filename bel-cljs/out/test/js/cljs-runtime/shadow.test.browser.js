goog.provide('shadow.test.browser');
shadow.test.browser.start = (function shadow$test$browser$start(){
shadow.test.env.reset_test_data_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"bel.bootstrap-test","bel.bootstrap-test",82621536,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return bel.bootstrap_test.core_test;},new cljs.core.Symbol("bel.bootstrap-test","core-test","bel.bootstrap-test/core-test",1451897845,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.bootstrap-test","bel.bootstrap-test",82621536,null),new cljs.core.Symbol(null,"core-test","core-test",1694918751,null),"bel/bootstrap_test.cljs",19,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.bootstrap_test.core_test)?bel.bootstrap_test.core_test.cljs$lang$test:null)]))], null)], null),new cljs.core.Symbol(null,"bel.reader-test","bel.reader-test",-889640827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return bel.reader_test.test_reader;},new cljs.core.Symbol("bel.reader-test","test-reader","bel.reader-test/test-reader",1563679357,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.reader-test","bel.reader-test",-889640827,null),new cljs.core.Symbol(null,"test-reader","test-reader",631511540,null),"bel/reader_test.cljs",(21),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.reader_test.test_reader)?bel.reader_test.test_reader.cljs$lang$test:null)]))], null)], null),new cljs.core.Symbol(null,"bel.evaluator-test","bel.evaluator-test",-906795529,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return bel.evaluator_test.test_evaluator;},new cljs.core.Symbol("bel.evaluator-test","test-evaluator","bel.evaluator-test/test-evaluator",-1266943366,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.evaluator-test","bel.evaluator-test",-906795529,null),new cljs.core.Symbol(null,"test-evaluator","test-evaluator",1880348389,null),"bel/evaluator_test.cljs",(24),(1),(14),(14),cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.evaluator_test.test_evaluator)?bel.evaluator_test.test_evaluator.cljs$lang$test:null)]))], null)], null),new cljs.core.Symbol(null,"bel.model-test","bel.model-test",568715995,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return bel.model_test.test_model;},new cljs.core.Symbol("bel.model-test","test-model","bel.model-test/test-model",2018683087,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"bel.model-test","bel.model-test",568715995,null),new cljs.core.Symbol(null,"test-model","test-model",1295273864,null),"bel/model_test.cljs",(20),(1),(12),(12),cljs.core.List.EMPTY,null,(cljs.core.truth_(bel.model_test.test_model)?bel.model_test.test_model.cljs$lang$test:null)]))], null)], null)], null));

return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1(cljs_test_display.core.init_BANG_.cljs$core$IFn$_invoke$arity$1("test-root"));
});
shadow.test.browser.stop = (function shadow$test$browser$stop(done){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});
shadow.test.browser.init = (function shadow$test$browser$init(){
shadow.dom.append.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#test-root","div#test-root",1877652692)], null));

return shadow.test.browser.start();
});
goog.exportSymbol('shadow.test.browser.init', shadow.test.browser.init);

//# sourceMappingURL=shadow.test.browser.js.map