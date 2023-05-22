var sourcesIndex = JSON.parse('{\
"api":["",[["v1",[],["column_def.rs"]]],["error.rs","helper.rs","lib.rs","v1.rs"]],\
"catalog":["",[["information_schema",[],["columns.rs","tables.rs"]],["local",[],["manager.rs","memory.rs"]],["remote",[],["client.rs","manager.rs"]]],["error.rs","helper.rs","information_schema.rs","lib.rs","local.rs","metrics.rs","remote.rs","schema.rs","system.rs","table_source.rs","tables.rs"]],\
"client":["",[],["client.rs","database.rs","error.rs","lib.rs","load_balance.rs","metrics.rs"]],\
"cmd":["",[["cli",[],["cmd.rs","helper.rs","repl.rs"]]],["cli.rs","datanode.rs","error.rs","frontend.rs","lib.rs","metasrv.rs","options.rs","standalone.rs"]],\
"common_base":["",[],["bit_vec.rs","buffer.rs","bytes.rs","lib.rs","readable_size.rs"]],\
"common_catalog":["",[],["consts.rs","error.rs","lib.rs"]],\
"common_datasource":["",[["file_format",[],["csv.rs","json.rs","parquet.rs"]],["object_store",[],["fs.rs","s3.rs"]]],["buffered_writer.rs","compression.rs","error.rs","file_format.rs","lib.rs","lister.rs","object_store.rs","share_buffer.rs","util.rs"]],\
"common_error":["",[],["ext.rs","format.rs","lib.rs","mock.rs","status_code.rs"]],\
"common_function":["",[["scalars",[["aggregate",[],["argmax.rs","argmin.rs","diff.rs","mean.rs","percentile.rs","polyval.rs","scipy_stats_norm_cdf.rs","scipy_stats_norm_pdf.rs"]],["expression",[],["binary.rs","ctx.rs","unary.rs"]],["math",[],["pow.rs","rate.rs"]],["numpy",[],["clip.rs","interp.rs"]],["timestamp",[],["to_unixtime.rs"]]],["aggregate.rs","expression.rs","function.rs","function_registry.rs","math.rs","numpy.rs","timestamp.rs","udf.rs"]]],["lib.rs","scalars.rs"]],\
"common_function_macro":["",[],["lib.rs","range_fn.rs"]],\
"common_grpc":["",[],["channel_manager.rs","error.rs","flight.rs","lib.rs","select.rs","writer.rs"]],\
"common_grpc_expr":["",[],["alter.rs","delete.rs","error.rs","insert.rs","lib.rs"]],\
"common_mem_prof":["",[],["error.rs","lib.rs"]],\
"common_meta":["",[],["instruction.rs","lib.rs"]],\
"common_procedure":["",[["local",[],["lock.rs","runner.rs"]],["store",[],["state_store.rs"]]],["error.rs","lib.rs","local.rs","procedure.rs","store.rs","watcher.rs"]],\
"common_procedure_test":["",[],["lib.rs"]],\
"common_query":["",[["logical_plan",[],["accumulator.rs","expr.rs","udaf.rs","udf.rs"]]],["columnar_value.rs","error.rs","function.rs","lib.rs","logical_plan.rs","physical_plan.rs","prelude.rs","signature.rs"]],\
"common_recordbatch":["",[],["adapter.rs","error.rs","lib.rs","recordbatch.rs","util.rs"]],\
"common_runtime":["",[],["error.rs","global.rs","lib.rs","metrics.rs","repeated_task.rs","runtime.rs"]],\
"common_telemetry":["",[],["lib.rs","logging.rs","macros.rs","metric.rs","panic_hook.rs"]],\
"common_test_util":["",[],["lib.rs","temp_dir.rs"]],\
"common_time":["",[],["date.rs","datetime.rs","error.rs","lib.rs","range.rs","timestamp.rs","timestamp_millis.rs","timezone.rs","util.rs"]],\
"datanode":["",[["heartbeat",[["handler",[],["open_region.rs","parse_mailbox_message.rs"]]],["handler.rs","mailbox.rs","utils.rs"]],["instance",[],["grpc.rs","sql.rs"]],["server",[],["grpc.rs"]],["sql",[],["alter.rs","create.rs","create_external.rs","drop_table.rs","flush_table.rs","insert.rs"]]],["datanode.rs","error.rs","heartbeat.rs","instance.rs","lib.rs","metrics.rs","mock.rs","server.rs","sql.rs"]],\
"datatypes":["",[["schema",[],["column_schema.rs","constraint.rs","raw.rs"]],["types",[],["binary_type.rs","boolean_type.rs","date_type.rs","datetime_type.rs","dictionary_type.rs","list_type.rs","null_type.rs","primitive_type.rs","string_type.rs","timestamp_type.rs"]],["vectors",[["operations",[],["cast.rs","filter.rs","find_unique.rs","replicate.rs","take.rs"]]],["binary.rs","boolean.rs","constant.rs","date.rs","datetime.rs","eq.rs","helper.rs","list.rs","null.rs","operations.rs","primitive.rs","string.rs","timestamp.rs","validity.rs"]]],["arrow_array.rs","data_type.rs","error.rs","lib.rs","macros.rs","prelude.rs","scalars.rs","schema.rs","serialize.rs","timestamp.rs","type_id.rs","types.rs","value.rs","vectors.rs"]],\
"file_table_engine":["",[["engine",[["procedure",[],["create.rs","drop.rs"]]],["immutable.rs","procedure.rs"]],["manifest",[],["immutable.rs"]],["table",[],["format.rs","immutable.rs"]]],["config.rs","engine.rs","error.rs","lib.rs","manifest.rs","table.rs"]],\
"frontend":["",[["instance",[],["distributed.rs","grpc.rs","influxdb.rs","opentsdb.rs","prometheus.rs","script.rs","standalone.rs"]],["service_config",[],["grpc.rs","influxdb.rs","mysql.rs","opentsdb.rs","postgres.rs","prom.rs","prometheus.rs"]],["statement",[],["copy_table_from.rs","copy_table_to.rs","describe.rs","show.rs","tql.rs"]],["table",[],["delete.rs","insert.rs","scan.rs"]]],["catalog.rs","datanode.rs","error.rs","expr_factory.rs","frontend.rs","heartbeat.rs","instance.rs","lib.rs","metrics.rs","script.rs","server.rs","service_config.rs","statement.rs","table.rs"]],\
"greptime":["",[],["greptime.rs"]],\
"log_store":["",[["raft_engine",[],["log_store.rs"]],["test_util",[],["log_store_util.rs"]]],["config.rs","error.rs","lib.rs","noop.rs","raft_engine.rs","test_util.rs"]],\
"meta_client":["",[["client",[],["heartbeat.rs","load_balance.rs","lock.rs","router.rs","store.rs"]],["rpc",[],["lock.rs","router.rs","store.rs","util.rs"]]],["client.rs","error.rs","lib.rs","rpc.rs"]],\
"meta_srv":["",[["election",[],["etcd.rs"]],["handler",[["failure_handler",[],["runner.rs"]]],["check_leader_handler.rs","collect_stats_handler.rs","failure_handler.rs","keep_lease_handler.rs","mailbox_handler.rs","node_stat.rs","on_leader_start.rs","persist_stats_handler.rs","response_header_handler.rs"]],["lock",[],["etcd.rs"]],["metasrv",[],["builder.rs"]],["procedure",[],["state_store.rs"]],["selector",[],["lease_based.rs","load_based.rs"]],["service",[["admin",[],["health.rs","heartbeat.rs","leader.rs","meta.rs"]],["store",[],["etcd.rs","ext.rs","kv.rs","memory.rs"]]],["admin.rs","cluster.rs","heartbeat.rs","lock.rs","mailbox.rs","router.rs","store.rs"]]],["bootstrap.rs","cluster.rs","election.rs","error.rs","failure_detector.rs","handler.rs","keys.rs","lease.rs","lib.rs","lock.rs","metadata_service.rs","metasrv.rs","metrics.rs","mocks.rs","procedure.rs","selector.rs","sequence.rs","service.rs","util.rs"]],\
"mito":["",[["engine",[["procedure",[],["alter.rs","create.rs","drop.rs"]]],["procedure.rs"]],["manifest",[],["action.rs"]],["table",[["test_util",[],["mock_engine.rs"]]],["test_util.rs"]]],["config.rs","engine.rs","error.rs","lib.rs","manifest.rs","metrics.rs","table.rs"]],\
"nyc_taxi":["",[],["nyc-taxi.rs"]],\
"object_store":["",[],["cache_policy.rs","lib.rs","metrics.rs","test_util.rs","util.rs"]],\
"partition":["",[],["columns.rs","error.rs","lib.rs","manager.rs","partition.rs","range.rs","route.rs","splitter.rs"]],\
"promql":["",[["extension_plan",[],["empty_metric.rs","instant_manipulate.rs","normalize.rs","planner.rs","range_manipulate.rs","series_divide.rs"]],["functions",[],["aggr_over_time.rs","changes.rs","deriv.rs","extrapolate_rate.rs","holt_winters.rs","idelta.rs","predict_linear.rs","quantile.rs","resets.rs"]]],["error.rs","extension_plan.rs","functions.rs","lib.rs","planner.rs","range_array.rs"]],\
"query":["",[["datafusion",[],["error.rs","planner.rs"]],["dist_plan",[],["analyzer.rs","commutativity.rs","merge_scan.rs","planner.rs","utils.rs"]],["query_engine",[],["context.rs","options.rs","state.rs"]],["sql",[],["show.rs"]]],["datafusion.rs","dist_plan.rs","error.rs","executor.rs","lib.rs","logical_optimizer.rs","metrics.rs","optimizer.rs","parser.rs","physical_optimizer.rs","physical_planner.rs","plan.rs","planner.rs","query_engine.rs","sql.rs"]],\
"script":["",[["python",[["ffi_types",[["copr",[],["compile.rs","parse.rs"]]],["copr.rs","py_recordbatch.rs","utils.rs","vector.rs"]],["rspython",[],["builtins.rs","copr_impl.rs","dataframe_impl.rs","utils.rs","vector_impl.rs"]]],["engine.rs","error.rs","ffi_types.rs","metric.rs","rspython.rs","utils.rs"]]],["engine.rs","error.rs","lib.rs","manager.rs","python.rs","table.rs"]],\
"servers":["",[["auth",[],["user_provider.rs"]],["grpc",[["flight",[],["stream.rs"]]],["database.rs","flight.rs","handler.rs","prom_query_gateway.rs"]],["http",[],["admin.rs","authorize.rs","handler.rs","influxdb.rs","opentsdb.rs","prometheus.rs","script.rs"]],["mysql",[],["federated.rs","handler.rs","server.rs","writer.rs"]],["opentsdb",[],["codec.rs","connection.rs","handler.rs"]],["postgres",[],["auth_handler.rs","handler.rs","server.rs"]],["query_handler",[],["grpc.rs","sql.rs"]]],["auth.rs","configurator.rs","error.rs","grpc.rs","http.rs","influxdb.rs","interceptor.rs","lib.rs","line_writer.rs","metrics.rs","metrics_handler.rs","mysql.rs","opentsdb.rs","postgres.rs","prom.rs","prometheus.rs","query_handler.rs","server.rs","shutdown.rs","tls.rs"]],\
"session":["",[],["context.rs","lib.rs"]],\
"sql":["",[["parsers",[],["alter_parser.rs","copy_parser.rs","create_parser.rs","delete_parser.rs","insert_parser.rs","query_parser.rs","tql_parser.rs"]],["statements",[],["alter.rs","copy.rs","create.rs","delete.rs","describe.rs","drop.rs","explain.rs","insert.rs","query.rs","show.rs","statement.rs","tql.rs"]]],["ast.rs","dialect.rs","error.rs","lib.rs","parser.rs","parsers.rs","statements.rs","util.rs"]],\
"sqlness_runner":["",[],["env.rs","main.rs","util.rs"]],\
"storage":["",[["compaction",[],["noop.rs","picker.rs","scheduler.rs","strategy.rs","task.rs","writer.rs"]],["flush",[],["picker.rs","scheduler.rs"]],["manifest",[],["action.rs","checkpoint.rs","helper.rs","impl_.rs","region.rs","storage.rs"]],["memtable",[],["btree.rs","inserter.rs","version.rs"]],["proto",[],["wal.rs"]],["read",[],["dedup.rs","merge.rs","windowed.rs"]],["region",[],["writer.rs"]],["scheduler",[],["dedup_deque.rs","rate_limit.rs"]],["schema",[],["compat.rs","projected.rs","region.rs","store.rs"]],["sst",[],["parquet.rs","stream_writer.rs"]],["write_batch",[],["codec.rs","compat.rs"]]],["chunk.rs","codec.rs","compaction.rs","config.rs","engine.rs","error.rs","file_purger.rs","flush.rs","lib.rs","manifest.rs","memtable.rs","metadata.rs","metrics.rs","proto.rs","read.rs","region.rs","scheduler.rs","schema.rs","snapshot.rs","sst.rs","sync.rs","version.rs","wal.rs","write_batch.rs"]],\
"store_api":["",[["logstore",[],["entry.rs","entry_stream.rs","namespace.rs"]],["manifest",[],["action.rs","storage.rs"]],["storage",[],["chunk.rs","consts.rs","descriptors.rs","engine.rs","metadata.rs","region.rs","requests.rs","responses.rs","snapshot.rs","types.rs"]]],["lib.rs","logstore.rs","manifest.rs","storage.rs"]],\
"substrait":["",[],["context.rs","df_expr.rs","df_logical.rs","df_substrait.rs","error.rs","lib.rs","schema.rs","types.rs"]],\
"table":["",[["engine",[],["manager.rs"]],["predicate",[],["stats.rs"]],["table",[],["adapter.rs","numbers.rs","scan.rs"]],["test_util",[],["empty_table.rs","memtable.rs","mock_engine.rs"]]],["engine.rs","error.rs","lib.rs","metadata.rs","predicate.rs","requests.rs","stats.rs","table.rs","test_util.rs"]],\
"table_procedure":["",[],["alter.rs","create.rs","drop.rs","error.rs","lib.rs"]],\
"tests_integration":["",[],["catalog.rs","grpc.rs","influxdb.rs","instance.rs","lib.rs","opentsdb.rs","prometheus.rs","table.rs","test_util.rs"]]\
}');
createSourceSidebar();
