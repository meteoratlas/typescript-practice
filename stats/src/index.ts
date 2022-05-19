import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reporters/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HTMLReport } from "./reporters/HTMLReport";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const summary = new Summary(new WinsAnalysis("Man United"), new HTMLReport());
const summary = Summary.winsWithHTMLReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
